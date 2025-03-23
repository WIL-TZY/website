export const BlockRenderer = ({blocks}) => {
    return blocks.map(block => {
        switch(block.name) {
            case 'gutsliders/any-content': {
                return <div key={block.id}>core cover</div>;
            }
            default:
                return null;
        }
    });
};