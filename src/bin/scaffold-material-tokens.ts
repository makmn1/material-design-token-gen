#!/usr/bin/env node

import { promptScaffold } from "../cli";
import { generateFromScaffold } from "../cli";

async function main() {
    try {
        const answers = await promptScaffold();
        const files = await generateFromScaffold(answers, { generateFiles: true });

        console.log(`\n✅ Successfully generated ${files.length} file(s):`);
        files.forEach((file) => {
            console.log(`   - ${file.path}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error(`\n❌ Error: ${error.message}`);
        } else {
            console.error(`\n❌ Error:`, error);
        }
        process.exit(1);
    }
}

main();

