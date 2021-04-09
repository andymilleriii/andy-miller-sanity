export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'links',
            title: 'Subscription Links',
            type: 'array',
            of: [{ type: 'link' }],
        },
    ],
}
