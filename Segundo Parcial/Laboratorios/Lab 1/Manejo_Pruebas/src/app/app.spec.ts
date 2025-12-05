import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Manejo_Pruebas');
  });

  it('should render the angular logo', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.angular-logo')).toBeTruthy();
  });

  it('should render welcome message', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Congratulations! Your app is running.');
  });

  it('should render 6 items in the pill group', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pills = compiled.querySelectorAll('.pill');
    expect(pills.length).toBe(6);
  });

  it('should have correct attributes for the first pill', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstPill = compiled.querySelector('.pill') as HTMLAnchorElement;
    expect(firstPill.getAttribute('href')).toBe('https://angular.dev');
    expect(firstPill.getAttribute('target')).toBe('_blank');
  });

  it('should render 3 social links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = compiled.querySelectorAll('.social-links a');
    expect(socialLinks.length).toBe(3);
  });

  it('should update output when input changes', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // 1. Get elements
    const input = compiled.querySelector('input') as HTMLInputElement;
    const outputSpan = compiled.querySelector('.output-text') as HTMLElement;

    // 2. Simulate User Input
    input.value = 'Angular Testing';
    input.dispatchEvent(new Event('input')); // Dispatch input event to trigger signal update

    // 3. Update view
    fixture.detectChanges();

    // 4. Verify Output
    expect(outputSpan.textContent).toBe('Angular Testing');
  });
});
