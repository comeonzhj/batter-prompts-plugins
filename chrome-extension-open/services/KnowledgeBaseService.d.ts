import { KnowledgeBaseConfig, KnowledgeBaseRetrievalResponse } from '../types';
export declare class KnowledgeBaseService {
    private config;
    constructor(config: KnowledgeBaseConfig);
    /**
     * 从知识库检索相关方法论
     * @param query 检索查询
     * @param topK 返回结果数量
     * @returns 检索结果
     */
    retrieve(query: string, topK?: number): Promise<{
        success: boolean;
        data?: KnowledgeBaseRetrievalResponse;
        error?: string;
    }>;
    /**
     * 测试知识库连接
     * @returns 测试结果
     */
    testConnection(): Promise<{
        success: boolean;
        error?: string;
    }>;
    /**
     * 从检索结果中提取相关方法论内容
     * @param retrievalResult 检索结果
     * @returns 格式化的方法论内容
     */
    extractMethodologyContent(retrievalResult: KnowledgeBaseRetrievalResponse): string;
    /**
     * 检查检索结果的质量
     * @param retrievalResult 检索结果
     * @returns 质量评估
     */
    assessRetrievalQuality(retrievalResult: KnowledgeBaseRetrievalResponse): {
        quality: 'high' | 'medium' | 'low';
        reason: string;
        confidence: number;
    };
    /**
     * 优化检索查询
     * @param originalQuery 原始查询
     * @returns 优化后的查询
     */
    optimizeQuery(originalQuery: string): string;
    /**
     * 从文本中提取关键词
     * @param text 输入文本
     * @returns 关键词数组
     */
    private extractKeywords;
    /**
     * 验证配置
     */
    private validateConfig;
    /**
     * 更新配置
     * @param config 新配置
     */
    updateConfig(config: KnowledgeBaseConfig): void;
    /**
     * 获取当前配置
     * @returns 当前配置
     */
    getConfig(): KnowledgeBaseConfig;
    /**
     * 批量检索
     * @param queries 查询数组
     * @param topK 每个查询返回的结果数
     * @returns 批量检索结果
     */
    batchRetrieve(queries: string[], topK?: number): Promise<{
        success: boolean;
        results?: Array<{
            query: string;
            data?: KnowledgeBaseRetrievalResponse;
            error?: string;
        }>;
        error?: string;
    }>;
    /**
     * 获取知识库统计信息
     * @returns 统计信息
     */
    getStats(): Promise<{
        success: boolean;
        stats?: {
            totalDocuments: number;
            totalSegments: number;
            lastUpdated: string;
        };
        error?: string;
    }>;
}
