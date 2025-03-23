import {v4 as uuid} from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    // Recommended way to modify the results that come back from a cached GraphQL query from Apollo
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    // Recursive uuid function - give an ID to each block array
    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();
            if (block.innerBlocks?.length) {
                assignIds(block.innerBlocks);
            };
        });
    };

    assignIds(blocks);

    return blocks;
};