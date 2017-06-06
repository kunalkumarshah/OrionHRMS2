import { Component, Provider, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/common";

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => InlineEditComponent),
        multi: true
    });

@Component({
    selector: 'inline-edit',
    providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
    styleUrls: ['./inline-edit.component.css'],
    templateUrl: './inline-edit.component.html'
})
export class InlineEditComponent implements ControlValueAccessor, ngOnInit {

    constructor() { }

    // The internal data model
    private _value: string = '';

    // Placeholders for the onChange and onTouch callbacks
    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    // get accessor
    get value(): any { return this._value; };

    // set accessor including the onChange callback
    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    // Will update the internal data model with incoming values
    writeValue(value: any) {
        this._value = value;
    }

    // ControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }

    // ControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void { this.onTouched = fn; };

}