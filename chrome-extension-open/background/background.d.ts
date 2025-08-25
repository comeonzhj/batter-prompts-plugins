import { ExtensionSettings } from '../types';
declare class BackgroundService {
    private knowledgeBaseService;
    private aiEnhanceService;
    private settings;
    constructor();
    private init;
    private loadSettings;
    private saveSettings;
    private updateServices;
    private handleMessage;
    private handleEnhanceRequest;
    private handleUpdateSettings;
    private handleTestLLMConnection;
    private handleTestKBConnection;
    private handleInstall;
    getSettings(): ExtensionSettings;
    updateSettings(newSettings: Partial<ExtensionSettings>): Promise<void>;
}
declare const backgroundService: BackgroundService;
export default backgroundService;
