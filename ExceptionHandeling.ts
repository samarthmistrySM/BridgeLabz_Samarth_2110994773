class SamError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = "SamError";
    }
}

function throwError() {
    try {
        throw new SamError("Something went wrong", 809);
    } catch (error) {
        if (error instanceof SamError) {
            console.error(`SamError: ${error.message}, Status Code: ${error.statusCode}`);
        } else {
            console.error("An error occurred:", error);
        }
    }
}

throwError();