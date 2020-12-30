import { AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Events } from './Events';
export declare class JoditAngularComponent extends Events implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private elementRef;
    private ngZone;
    config: object | undefined;
    private _config;
    tagName: string;
    id: string | undefined;
    defaultValue: string | undefined;
    element: HTMLInputElement;
    editor: any;
    private onChangeCallback;
    private onTouchedCallback;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    createElement(): void;
    value: string;
    resetEditor(): void;
    ngAfterViewInit(): void;
    createEditor(): void;
    ngOnDestroy(): void;
    writeValue(v: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
