const npxcard = require("npxcard");
const sections = [{
        title: 'Ellen niyobuhungiro (Personal)',
        details: [
            ['Email', 'ellenniyobuhungiro01@gmail.com'],
            ['Web', 'https://ellen.org'],
            ['Twitter', 'https://twitter.com/ellen'],
            ['GitHub', 'https://github.com/niyoel'],
            ['GitLab', 'https://gitlab.org/niyoel'],
        ],
    },
    {
        title: 'node.js/ npm',
        details: [
            ['card', '$ npx ellen'],
        ],
    },
]
const output = npxcard(sections)
console.log(output)