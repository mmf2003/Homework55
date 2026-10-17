console.log("#54. JavaScript homework example file");

import { writeFile, readFile, unlink } from "node:fs/promises";

// ========================================
// #1. Write File Async
// ========================================

async function writeFileAsync(filename, content) {
    try {
        await writeFile(filename, content, "utf8");

        console.log("Файл успішно записано");
    } catch (error) {
        console.error("Помилка при записі файлу:", error);
        throw error;
    }
}

// ========================================
// #2. Read File Async
// ========================================

async function readFileAsync(filename) {
    try {
        const content = await readFile(filename, "utf8");

        console.log("Файл успішно прочитано:", content);

        return content;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("Файл не існує:", filename);
        } else {
            console.error("Помилка при читанні файлу:", error);
        }

        throw error;
    }
}

// ========================================
// #3. Delete File Async
// ========================================

async function deleteFileAsync(filename) {
    try {
        await unlink(filename);

        console.log("Файл успішно видалено");
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("Файл не існує:", filename);
        } else {
            console.error("Помилка при видаленні файлу:", error);
        }

        throw error;
    }
}

export { writeFileAsync, readFileAsync, deleteFileAsync };
