export declare enum SiteType {
    DEEPSEEK = "deepseek",
    KIMI = "kimi",
    DOUBAO = "doubao",
    UNKNOWN = "unknown"
}
export interface LLMConfig {
    modelName: string;
    baseUrl: string;
    apiKey: string;
}
export interface KnowledgeBaseConfig {
    postUrl: string;
    datasetId: string;
    apiKey: string;
}
export interface ExtensionSettings {
    llmConfig: LLMConfig;
    knowledgeBaseConfig: KnowledgeBaseConfig;
    enabledSites: SiteType[];
    enhanceButtonText: string;
}
export interface MethodologyResult {
    title: string;
    description: string;
    methodology: string;
}
export interface KnowledgeBaseRetrievalResponse {
    query: {
        content: string;
    };
    records: Array<{
        segment: {
            id: string;
            content: string;
            keywords: string[];
        };
        score: number;
    }>;
}
export interface AIEnhanceResponse {
    success: boolean;
    enhancedText?: string;
    error?: string;
}
export interface SiteConfig {
    type: SiteType;
    name: string;
    inputSelector: string;
    inputType: 'textarea' | 'contenteditable';
    buttonContainerSelector: string;
    sendButtonSelector?: string;
    isEnabled: boolean;
}
export interface Message {
    type: string;
    data?: any;
}
export interface EnhanceRequestMessage extends Message {
    type: 'ENHANCE_REQUEST';
    data: {
        userInput: string;
        siteType: SiteType;
    };
}
export interface EnhanceResponseMessage extends Message {
    type: 'ENHANCE_RESPONSE';
    data: AIEnhanceResponse;
}
export interface ConfigUpdateMessage extends Message {
    type: 'CONFIG_UPDATE';
    data: Partial<ExtensionSettings>;
}
export interface StatusUpdateMessage extends Message {
    type: 'STATUS_UPDATE';
    data: {
        isLoading: boolean;
        error?: string;
    };
}
export interface PageElements {
    inputElement: HTMLElement;
    buttonContainer: HTMLElement;
    enhanceButton?: HTMLElement;
}
export interface InputHandler {
    getInputText(): string;
    setInputText(text: string): void;
    focus(): void;
    triggerInput(): void;
}
export declare enum ButtonState {
    NORMAL = "normal",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}
export declare enum ErrorType {
    NETWORK_ERROR = "network_error",
    API_ERROR = "api_error",
    CONFIG_ERROR = "config_error",
    UNKNOWN_ERROR = "unknown_error"
}
export declare class ExtensionError extends Error {
    type: ErrorType;
    constructor(message: string, type?: ErrorType);
}
