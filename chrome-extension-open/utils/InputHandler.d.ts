import { InputHandler as InputHandlerInterface } from '../types';
export declare class InputHandler implements InputHandlerInterface {
    private element;
    private inputType;
    constructor(element: HTMLElement, inputType: 'textarea' | 'contenteditable');
    /**
     * 获取输入框文本内容
     */
    getInputText(): string;
    /**
     * 设置输入框文本内容
     */
    setInputText(text: string): void;
    /**
     * 聚焦到输入框
     */
    focus(): void;
    /**
     * 触发输入事件
     */
    triggerInput(): void;
    /**
     * 获取contenteditable的纯文本内容
     */
    private getContentEditableText;
    /**
     * 设置textarea的值
     */
    private setTextareaValue;
    /**
     * 设置contenteditable的文本
     */
    private setContentEditableText;
    /**
     * 检查是否为Kimi编辑器
     */
    private isKimiEditor;
    /**
     * 设置Kimi编辑器的文本
     */
    private setKimiEditorText;
    /**
     * 将光标移到contenteditable末尾
     */
    private setCursorToEnd;
    /**
     * 触发框架特定的事件
     */
    private triggerFrameworkEvents;
    /**
     * 触发React事件
     */
    private triggerReactEvent;
    /**
     * 触发Vue事件
     */
    private triggerVueEvent;
    /**
     * 触发自定义事件
     */
    private triggerCustomEvents;
    /**
     * 检查输入框是否可编辑
     */
    isEditable(): boolean;
    /**
     * 获取输入框的字符限制
     */
    getMaxLength(): number | null;
    /**
     * 检查文本是否超出长度限制
     */
    isTextTooLong(text: string): boolean;
    /**
     * 直接触发React Fiber更新
     */
    private triggerReactFiberUpdate;
    /**
     * 获取当前光标位置
     */
    getCursorPosition(): number;
    /**
     * 触发Lexical特定事件
     */
    private triggerLexicalEvents;
}
