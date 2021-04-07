import { AiOutlineYoutube } from "react-icons/ai";

export default {
    name: 'videoLink',
    title: 'Video Link',
    type: 'object',
    icon: AiOutlineYoutube,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
    ],
}
