System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
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
    var core_1, forms_1, InlineEditComponent, InlineEditComponent_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            InlineEditComponent = InlineEditComponent_1 = (function () {
                function InlineEditComponent(element, _renderer) {
                    this._renderer = _renderer;
                    this.onSave = new core_1.EventEmitter();
                    // The internal data model
                    this._value = '';
                    this.preValue = '';
                    this.editing = false;
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
                InlineEditComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                InlineEditComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                ;
                // Method to display the inline edit form and hide the <a> element
                InlineEditComponent.prototype.edit = function (value) {
                    var _this = this;
                    this.preValue = value; // Store original value in case the form is cancelled
                    this.editing = true;
                    // Automatically focus input
                    setTimeout(function (_) { return _this._renderer.invokeElementMethod(_this.inlineEditControl.nativeElement, 'focus', []); });
                };
                // Method to display the editable value as text and emit save event to host
                InlineEditComponent.prototype.onSubmit = function (value) {
                    this.onSave.emit(value);
                    this.editing = false;
                };
                // Method to reset the editable value
                InlineEditComponent.prototype.cancel = function (value) {
                    this._value = this.preValue;
                    this.editing = false;
                };
                return InlineEditComponent;
            }());
            __decorate([
                core_1.ViewChild('inlineEditControl'),
                __metadata("design:type", Object)
            ], InlineEditComponent.prototype, "inlineEditControl", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], InlineEditComponent.prototype, "onSave", void 0);
            InlineEditComponent = InlineEditComponent_1 = __decorate([
                core_1.Component({
                    selector: 'inline-edit',
                    templateUrl: './inline-edit.component.html',
                    styleUrls: ['./styles/inline-edit.component.css'],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return InlineEditComponent_1; }),
                            multi: true
                        }
                    ]
                }),
                __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
            ], InlineEditComponent);
            exports_1("InlineEditComponent", InlineEditComponent);
        }
    };
});
//# sourceMappingURL=inline-edit.component.js.map