import fs from "fs/promises";

async function writeToFile(filename: string, content: string): Promise<void> {
    try {
        await fs.writeFile(filename, content, "utf8");
        console.log(`Successfully wrote to file: ${filename}`);
    } catch (error) {
        console.error(`Failed to write to file: ${filename} - ${error}`);
    }
}

async function readFromFile(filename: string): Promise<string> {
    try {
        const data = await fs.readFile(filename, "utf8");
        console.log(`Successfully read from file: ${filename}`);
        return data;
    } catch (error) {
        console.error(`Failed to read file: ${filename} - ${error}`);
        throw error;
    }
}

async function fileIO() {
    const filename = "example.txt";
    await writeToFile(filename, "Hello, TypeScript!");
    const content = await readFromFile(filename);
    console.log("File Content:", content);
}

fileIO();
