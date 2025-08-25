import { SiteConfig } from '../types';
export declare class EnhanceButtonInjector {
    private siteConfig;
    private button;
    private inputHandler;
    private isInjected;
    constructor(siteConfig: SiteConfig);
    /**
     * 注入增强按钮
     */
    inject(): Promise<boolean>;
    /**
     * 重新注入按钮
     */
    reinject(): Promise<boolean>;
    /**
     * 创建增强按钮
     */
    private createEnhanceButton;
    /**
     * 获取按钮样式类
     */
    private getButtonClasses;
    /**
     * 获取按钮内容
     */
    private getButtonContent;
    /**
     * 注入按钮到页面
     */
    private injectButton;
    /**
     * DeepSeek 特定注入逻辑
     */
    private injectForDeepSeek;
    /**
     * Kimi 特定注入逻辑
     */
    private injectForKimi;
    /**
     * 豆包 特定注入逻辑
     */
    private injectForDoubao;
    /**
     * 处理增强按钮点击
     */
    private handleEnhanceClick;
    /**
     * 发送增强请求到后台
     */
    private sendEnhanceRequest;
    /**
     * 设置按钮状态
     */
    private setButtonState;
    /**
     * 更新按钮内容
     */
    private updateButtonContent;
    /**
     * 显示工具提示
     */
    private showTooltip;
    /**
     * 清理资源
     */
    cleanup(): void;
    /**
     * 检查是否已注入
     */
    isButtonInjected(): boolean;
    /**
     * 获取按钮元素
     */
    getButton(): HTMLElement | null;
}
