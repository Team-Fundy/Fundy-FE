import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";


const EditorToolbar = ({ setEditorState, editorState }) => {

    const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    return (
        <div className="flex px-2 gap-5 bg-slate-800 max-w-fit text-white">
            <button onMouseDown={(e) => handleBlockClick(e, "header-one")}>h1</button>
            <button onMouseDown={(e) => handleBlockClick(e, "header-two")}>h2</button>
            <button onMouseDown={(e) => handleBlockClick(e, "header-three")}>h3</button>
            <button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>normal</button>
            <button onMouseDown={(e) => handleTogggleClick(e, "BOLD")}>bold</button>
            <button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}>italic</button>
            <button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}>strikthrough</button>
            <button onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>ol</button>
            <button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>ul</button>
        </div>
    );
};
export default EditorToolbar;



