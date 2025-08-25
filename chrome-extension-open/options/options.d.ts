import { LLMConfig, KnowledgeBaseConfig, SiteType } from '../types/index';
interface MessageResponse {
    success: boolean;
    data?: any;
    error?: string;
}
declare class OptionsPage {
    private elements;
    private settings;
    constructor();
    init(): Promise<void>;
    bindElements(): void;
    bindEvents(): void;
    loadSettings(): Promise<void>;
    getDefaultSettings(): {
        llmConfig: {
            modelName: string;
            baseUrl: string;
            apiKey: string;
        };
        knowledgeBaseConfig: {
            postUrl: string;
            datasetId: string;
            apiKey: string;
        };
        enabledSites: SiteType[];
        enhanceButtonText: string;
    };
    updateUI(): void;
    updateStatus(): void;
    updateStatusIndicator(element: HTMLElement, isConfigured: boolean | null): void;
    isLLMConfigured(): true | null;
    isKBConfigured(): true | null;
    getCurrentLLMConfig(): LLMConfig;
    getCurrentKBConfig(): KnowledgeBaseConfig;
    testLLMConnection(): Promise<void>;
    testKBConnection(): Promise<void>;
    saveSettings(): Promise<void>;
    getEnabledSites(): SiteType[];
    resetSettings(): Promise<void>;
    onInputChange(): void;
    setButtonLoading(button: HTMLButtonElement, loading: boolean): void;
    sendMessage(type: string, data?: any): Promise<MessageResponse>;
    showToast(message: string, type?: string, duration?: number): void;
}
declare global {
    interface Window {
        optionsPage: OptionsPage | null;
    }
}
export {};
