import { LLMConfig, AIEnhanceResponse } from '../types';
export declare class AIEnhanceService {
    private config;
    constructor(config: LLMConfig);
    /**
     * 增强用户输入的提示词
     * @param userInput 用户原始输入
     * @param methodologyContext 方法论上下文
     * @returns 增强结果
     */
    enhance(userInput: string, methodologyContext?: string): Promise<AIEnhanceResponse>;
    /**
     * 测试AI服务连接
     * @returns 测试结果
     */
    testConnection(): Promise<{
        success: boolean;
        error?: string;
    }>;
    /**
     * 获取系统提示词
     */
    private getSystemPrompt;
    /**
     * 构建用户提示词
     */
    private buildUserPrompt;
    /**
     * 调用大模型API
     */
    private callLLMAPI;
    /**
     * 验证配置
     */
    private validateConfig;
    /**
     * 更新配置
     */
    updateConfig(config: LLMConfig): void;
    /**
     * 获取当前配置
     */
    getConfig(): LLMConfig;
    /**
     * 估算token数量
     */
    estimateTokens(text: string): number;
    /**
     * 检查输入长度是否合适
     */
    validateInputLength(userInput: string, methodologyContext?: string): {
        isValid: boolean;
        reason?: string;
        estimatedTokens: number;
    };
    /**
     * 预处理用户输入
     */
    preprocessUserInput(input: string): string;
    /**
     * 后处理AI响应
     */
    postprocessResponse(response: string): string;
    /**
     * 批量增强
     */
    batchEnhance(inputs: Array<{
        userInput: string;
        methodologyContext?: string;
    }>): Promise<Array<{
        original: string;
        enhanced?: string;
        error?: string;
    }>>;
    /**
     * 获取使用统计
     */
    getUsageStats(): {
        totalRequests: number;
        successRate: number;
        averageResponseTime: number;
    };
}
