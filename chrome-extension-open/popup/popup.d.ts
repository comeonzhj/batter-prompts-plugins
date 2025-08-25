import { SiteType } from '../types/index';
interface SiteInfo {
    name: string;
    type: SiteType;
    supported: boolean;
    enabled: boolean;
}
interface MessageResponse {
    success: boolean;
    data?: any;
    error?: string;
}
declare class PopupManager {
    private elements;
    private settings;
    private currentTab;
    private siteInfo;
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
    getCurrentTab(): Promise<void>;
    analyzeSite(url?: string): SiteInfo;
    updateUI(): void;
    updateSiteInfo(): void;
    updateStats(): void;
    checkSystemStatus(): Promise<void>;
    checkConfiguration(): {
        level: string;
        title: string;
        desc: string;
    };
    checkConnections(): Promise<void>;
    setStatusChecking(): void;
    setStatusReady(): void;
    setStatusWarning(title: string, desc: string): void;
    setStatusError(title: string, desc: string): void;
    testFunctionality(): Promise<void>;
    toggleSiteSupport(): Promise<void>;
    openOptionsPage(): void;
    openFeedbackForm(): void;
    showTemporaryStatus(icon: string, title: string, desc: string, duration?: number): void;
    setButtonLoading(button: HTMLButtonElement, loading: boolean): void;
    sendMessage(type: string, data?: any): Promise<MessageResponse>;
}
declare global {
    interface Window {
        popupManager: PopupManager | null;
    }
}
export {};
