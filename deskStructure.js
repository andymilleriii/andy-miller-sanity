import S from "@sanity/desk-tool/structure-builder"
import {
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineRead,
  AiOutlineYoutube,
} from "react-icons/ai"

const hiddenDocTypes = (listItem) => !["homePage", "post", "about", "bookPage", "videoPage"].includes(listItem.getId())

export default () =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Articles")
        .icon(AiOutlineFileText)
        .child(S.documentTypeList("post")),

      S.divider(),

      S.listItem()
        .title("Home Page")
        .icon(AiOutlineHome)
        .child(
          S.editor()
            .id("home")
            .schemaType("homePage")
            .documentId("singleton-home")
        ),
      S.listItem()
        .title("About Page")
        .icon(AiOutlineUser)
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singleton-about")
        ),
      S.listItem()
        .title("Book Page")
        .icon(AiOutlineRead)
        .child(
          S.editor()
            .id("book")
            .schemaType("bookPage")
            .documentId("singleton-book")
        ),
      S.listItem()
        .title("Video Page")
        .icon(AiOutlineYoutube)
        .child(
          S.editor()
            .id("video")
            .schemaType("videoPage")
            .documentId("singleton-video")
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
