import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
export interface IdentifierSpec {
    name: string;
    moduleUrl: string;
    runtime: any;
}
export declare class Identifiers {
    static ANALYZE_FOR_ENTRY_COMPONENTS: IdentifierSpec;
    static ViewUtils: IdentifierSpec;
    static AppView: IdentifierSpec;
    static DebugAppView: IdentifierSpec;
    static AppElement: IdentifierSpec;
    static ElementRef: IdentifierSpec;
    static ViewContainerRef: IdentifierSpec;
    static ChangeDetectorRef: IdentifierSpec;
    static RenderComponentType: IdentifierSpec;
    static QueryList: IdentifierSpec;
    static TemplateRef: IdentifierSpec;
    static TemplateRef_: IdentifierSpec;
    static CodegenComponentFactoryResolver: IdentifierSpec;
    static ComponentFactoryResolver: IdentifierSpec;
    static ComponentFactory: IdentifierSpec;
    static NgModuleFactory: IdentifierSpec;
    static NgModuleInjector: IdentifierSpec;
    static RegisterModuleFactoryFn: IdentifierSpec;
    static ValueUnwrapper: IdentifierSpec;
    static Injector: IdentifierSpec;
    static ViewEncapsulation: IdentifierSpec;
    static ViewType: IdentifierSpec;
    static ChangeDetectionStrategy: IdentifierSpec;
    static StaticNodeDebugInfo: IdentifierSpec;
    static DebugContext: IdentifierSpec;
    static Renderer: IdentifierSpec;
    static SimpleChange: IdentifierSpec;
    static UNINITIALIZED: IdentifierSpec;
    static ChangeDetectorStatus: IdentifierSpec;
    static checkBinding: IdentifierSpec;
    static flattenNestedViewRenderNodes: IdentifierSpec;
    static devModeEqual: IdentifierSpec;
    static interpolate: IdentifierSpec;
    static castByValue: IdentifierSpec;
    static EMPTY_ARRAY: IdentifierSpec;
    static EMPTY_MAP: IdentifierSpec;
    static pureProxies: {
        name: string;
        moduleUrl: string;
        runtime: <P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R;
    }[];
    static SecurityContext: IdentifierSpec;
    static AnimationKeyframe: IdentifierSpec;
    static AnimationStyles: IdentifierSpec;
    static NoOpAnimationPlayer: IdentifierSpec;
    static AnimationGroupPlayer: IdentifierSpec;
    static AnimationSequencePlayer: IdentifierSpec;
    static prepareFinalAnimationStyles: IdentifierSpec;
    static balanceAnimationKeyframes: IdentifierSpec;
    static clearStyles: IdentifierSpec;
    static renderStyles: IdentifierSpec;
    static collectAndResolveStyles: IdentifierSpec;
    static LOCALE_ID: IdentifierSpec;
    static TRANSLATIONS_FORMAT: IdentifierSpec;
    static AnimationOutput: IdentifierSpec;
}
export declare function resolveIdentifier(identifier: IdentifierSpec): CompileIdentifierMetadata;
export declare function identifierToken(identifier: CompileIdentifierMetadata): CompileTokenMetadata;
export declare function resolveIdentifierToken(identifier: IdentifierSpec): CompileTokenMetadata;
export declare function resolveEnumIdentifier(enumType: CompileIdentifierMetadata, name: string): CompileIdentifierMetadata;
