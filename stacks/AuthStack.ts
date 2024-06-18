import { ApiStack } from "./ApiStack";
import * as iam from "aws-cdk-lib/aws-iam";
import { StorageStack } from "./StorageStack";
import { Cognito, StackContext, use } from "sst/constructs";

export function AuthStack({ stack, app}: StackContext) {
    const { api } = use(ApiStack);
    const { bucket } = use(StorageStack);

    const auth = new Cognito(stack, "Auth", {
        login: ["email"],
    });

    auth.attachPermissionsForAuthUsers(stack, [
        // allow aess to api
        api,
        // policy granting access to aspecific folder in the bucket
        new iam.PolicyStatement({
            actions: ["s3:*"],
            effect: iam.Effect.ALLOW,
            resources: [
                bucket.bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*",
            ],
        }),
    ]);

    // show the auth resources in the output
    stack.addOutputs({
        Region: app.region,
        UserPoolId: auth.userPoolId,
        UserPoolClientId: auth.userPoolClientId,
        IdentityPoolId: auth.cognitoIdentityPoolId,
    });

    return {
        auth,
    };
}