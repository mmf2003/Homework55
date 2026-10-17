import { writeFileAsync, readFileAsync, deleteFileAsync } from "./main.js";

async function runTests() {
    const filename = "example.txt";

    // ========================================
    // TEST #1: WRITE FILE
    // ========================================

    console.log("\nWRITE FILE TEST");

    await writeFileAsync(filename, "Привіт, це тестовий файл!");

    // ========================================
    // TEST #2: READ FILE
    // ========================================

    console.log("\nREAD FILE TEST");

    const content = await readFileAsync(filename);

    console.log("Прочитаний вміст:", content);

    // ========================================
    // TEST #3: DELETE FILE
    // ========================================

    console.log("\nDELETE FILE TEST");

    await deleteFileAsync(filename);

    // ========================================
    // TEST #4: READ MISSING FILE
    // ========================================

    console.log("\nREAD MISSING FILE TEST");

    try {
        await readFileAsync(filename);
    } catch (error) {
        console.log("Expected error:", error.code);
    }

    // ========================================
    // TEST #5: DELETE MISSING FILE
    // ========================================

    console.log("\nDELETE MISSING FILE TEST");

    try {
        await deleteFileAsync(filename);
    } catch (error) {
        console.log("Expected error:", error.code);
    }
}

runTests().catch((error) => {
    console.error("Unexpected test error:", error);
    process.exitCode = 1;
});
