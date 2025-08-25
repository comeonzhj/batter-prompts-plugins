/**
 * Chrome扩展错误处理和用户体验优化工具类
 */
/**
 * 错误类型枚举
 */
export declare enum ErrorType {
    NETWORK_ERROR = "network_error",
    API_ERROR = "api_error",
    CONFIG_ERROR = "config_error",
    EXTENSION_ERROR = "extension_error",
    SITE_COMPATIBILITY_ERROR = "site_compatibility_error",
    UNKNOWN_ERROR = "unknown_error"
}
/**
 * 自定义错误类
 */
export declare class ExtensionError extends Error {
    type: ErrorType;
    code?: string;
    details?: any;
    recoverable: boolean;
    constructor(message: string, type?: ErrorType, recoverable?: boolean, code?: string, details?: any);
}
/**
 * 错误处理器
 */
export declare class ErrorHandler {
    private static instance;
    private errorLog;
    private constructor();
    static getInstance(): ErrorHandler;
    /**
     * 处理错误
     */
    handleError(error: Error, context?: string): void;
    /**
     * 记录错误日志
     */
    private logError;
    /**
     * 向用户显示错误信息
     */
    private showErrorToUser;
    /**
     * 获取用户友好的错误消息
     */
    private getUserFriendlyMessage;
    /**
     * 处理重试逻辑
     */
    private handleRetry;
    /**
     * 发送错误到后台脚本
     */
    private sendErrorToBackground;
    /**
     * 显示通知
     */
    showNotification(options: {
        type: 'success' | 'error' | 'warning' | 'info';
        title: string;
        message: string;
        action?: {
            text: string;
            callback: () => void;
        };
        duration?: number;
    }): void;
    /**
     * 创建通知元素
     */
    private createNotificationElement;
    /**
     * 移除通知
     */
    private removeNotification;
    /**
     * 显示成功提示
     */
    showSuccess(title: string, message: string, duration?: number): void;
    /**
     * 显示警告提示
     */
    showWarning(title: string, message: string, duration?: number): void;
    /**
     * 显示信息提示
     */
    showInfo(title: string, message: string, duration?: number): void;
    /**
     * 获取错误统计
     */
    getErrorStats(): {
        totalErrors: number;
        errorsByType: Record<string, number>;
        recentErrors: Array<{
            timestamp: Date;
            message: string;
            context?: string;
        }>;
    };
}
/**
 * 用户体验工具类
 */
export declare class UXHelper {
    /**
     * 防抖函数
     */
    static debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void;
    /**
     * 节流函数
     */
    static throttle<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void;
    /**
     * 等待元素出现
     */
    static waitForElement(selector: string, timeout?: number, interval?: number): Promise<HTMLElement>;
    /**
     * 安全执行函数
     */
    static safeExecute<T>(operation: () => Promise<T> | T, context?: string, defaultValue?: T): Promise<T | undefined>;
    /**
     * 创建加载指示器
     */
    static createLoadingIndicator(): {
        show: (message?: string) => void;
        hide: () => void;
        update: (message: string) => void;
    };
}
