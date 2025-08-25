import { SiteType, SiteConfig } from '../types';
export declare class SiteDetector {
    private static siteConfigs;
    /**
     * 检测当前网站类型
     */
    static detectSite(): SiteType;
    /**
     * 获取网站配置
     */
    static getSiteConfig(siteType?: SiteType): SiteConfig;
    /**
     * 检查网站是否受支持
     */
    static isSupportedSite(siteType?: SiteType): boolean;
    /**
     * 等待元素出现
     */
    static waitForElement(selector: string, timeout?: number): Promise<HTMLElement | null>;
    /**
     * 等待多个元素出现
     */
    static waitForElements(selectors: string[], timeout?: number): Promise<(HTMLElement | null)[]>;
    /**
     * 检查页面是否为聊天页面
     */
    static isChatPage(): boolean;
    /**
     * 获取网站特定的按钮样式类
     */
    static getButtonStyleClasses(siteType?: SiteType): string[];
    /**
     * 获取网站特定的图标
     */
    static getEnhanceIcon(siteType?: SiteType): string;
    /**
     * 验证网站配置
     */
    static validateSiteConfig(config: SiteConfig): boolean;
    /**
     * 更新站点配置
     */
    static updateSiteConfig(siteType: SiteType, updates: Partial<SiteConfig>): void;
    /**
     * 获取所有支持的网站配置
     */
    static getAllSiteConfigs(): Record<SiteType, SiteConfig>;
    /**
     * 检查元素是否可见
     */
    static isElementVisible(element: HTMLElement): boolean;
    /**
     * 查找最佳的按钮插入位置
     */
    static findButtonInsertPosition(containerSelector: string, siteType?: SiteType): HTMLElement | null;
}
