import Sheet from "@mui/joy/Sheet";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { linkPlugin } from "@mdxeditor/editor/plugins/link";
import { linkDialogPlugin } from "@mdxeditor/editor/plugins/link-dialog";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";

import { BlockTypeSelect } from "@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { ListsToggle } from "@mdxeditor/editor/plugins/toolbar/components/ListsToggle";
import { CreateLink } from "@mdxeditor/editor/plugins/toolbar/components/CreateLink";

import "@mdxeditor/editor/style.css";

/**
 *
 * @param {object} props
 * @param {string} props.initialValue
 * @param {(value: string) => void} props.onChange
 * @returns
 */
export function Editor({ initialValue, onChange }) {
  return (
    <Sheet>
      <MDXEditor
        markdown={initialValue}
        placeholder="Body"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <BlockTypeSelect />
                <BoldItalicUnderlineToggles />
                <UndoRedo />
                <ListsToggle />
                <CreateLink />
              </>
            ),
          }),
        ]}
        onChange={onChange}
      />
    </Sheet>
  );
}
