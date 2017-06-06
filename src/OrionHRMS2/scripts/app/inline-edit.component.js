System.register(["@angular/core", "@angular/common"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, INLINE_EDIT_CONTROL_VALUE_ACCESSOR, InlineEditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            INLINE_EDIT_CONTROL_VALUE_ACCESSOR = new Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return InlineEditComponent; }),
                multi: true
            });
            InlineEditComponent = (function () {
                function InlineEditComponent() {
                    // The internal data model
                    this._value = '';
                    // Placeholders for the onChange and onTouch callbacks
                    this.onChange = Function.prototype;
                    this.onTouched = Function.prototype;
                }
                Object.defineProperty(InlineEditComponent.prototype, "value", {
                    // get accessor
                    get: function () { return this._value; },
                    // set accessor including the onChange callback
                    set: function (v) {
                        if (v !== this._value) {
                            this._value = v;
                            this.onChange(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                // Will update the internal data model with incoming values
                InlineEditComponent.prototype.writeValue = function (value) {
                    this._value = value;
                };
                // ControlValueAccessor interface
                InlineEditComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                // ControlValueAccessor interface
                InlineEditComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                ;
                return InlineEditComponent;
            }());
            InlineEditComponent = __decorate([
                core_1.Component({
                    selector: 'inline-edit',
                    providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
                    styleUrls: ['./inline-edit.component.css'],
                    templateUrl: './inline-edit.component.html'
                }),
                __metadata("design:paramtypes", [])
            ], InlineEditComponent);
            exports_1("InlineEditComponent", InlineEditComponent);
        }
    };
});
//# sourceMappingURL=inline-edit.component.js.map