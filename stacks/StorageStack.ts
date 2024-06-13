import { StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
    //Create DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string",
        }, 
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });

    return {
        table,
    };
}