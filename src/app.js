class FormControlBuilder {
    static get QR_TYPE_SELECT_ID() {
        return 'qr-type-select';
    }

    static get QR_TYPE_OPT_LIST() {
        return {
            STRING: {
                value: 'string',
                label: 'String'
            },
            TEXT: {
                value: 'text',
                label: 'Text'
            }
        }
    };

    static get DATA_FORM_ID() {
        return 'qr-data-form-id';
    }

    static get DATA_FORM_NAME() {
        return 'qr-data-form-name';
    }

    static get DATA_FORM_CONTROLS() {
        return {
            STRING: {
                name: 'string',
            },
            TEXT: {
                name: 'text',
            }
        }
    };

    static get GENERATE_BUTTON_ID() {
        return 'qr-generate-button';
    }

    makeQrTypeSelect({
                         selectId = FormControlBuilder.QR_TYPE_SELECT_ID,
                         labelText = 'Select QR Code Type:',
                         options = FormControlBuilder.QR_TYPE_OPT_LIST
                     } = {}) {
        const selectLabel = document.createElement('label');
        selectLabel.append(labelText);
        const selectElement = document.createElement('select');
        selectElement.setAttribute('id', selectId);
        const optList = Object.values(options);

        for (let i = 0; i < optList.length; i++) {
            const opt = document.createElement('option');
            opt.setAttribute('value', optList[i].value);
            opt.append(optList[i].label);
            selectElement.add(opt);
        }

        selectLabel.appendChild(selectElement);
        return selectLabel;
    }


    makeForm({
                 formId = FormControlBuilder.DATA_FORM_ID,
                 formName = FormControlBuilder.DATA_FORM_NAME,
                 formControls = [],
                 submitHandler = (form) => form,
             } = {}) {
        const form = document.createElement('form');
        form.setAttribute('id', formId);
        form.setAttribute('name', formName);
        form.append(...formControls);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitHandler(form);
        });
        return form;
    }

    makeButton({
                   buttonId = FormControlBuilder.GENERATE_BUTTON_ID,
                   type = 'submit',
                   form = FormControlBuilder.DATA_FORM_ID,
                   buttonText = 'Generate QR Code',
               } = {}) {
        const button = document.createElement('button');
        button.setAttribute('id', buttonId);
        button.setAttribute('type', type);
        button.setAttribute('form', form);
        button.append(buttonText);
        return button;
    }
}

class QRCodeApp {
    #formBuilder;
    #selectContainer = document.getElementById('select-qr-type-container');
    #formContainer = document.getElementById('form-container');
    #generateButtonContainer = document.getElementById('generate-button-container');
    #qrCodeContainer = document.getElementById('qrcode-container');

    constructor(formBuilder) {
        this.#formBuilder = formBuilder;
        this.#init();
    }

    #init() {
        this.#setupElements();
        this.#bindEvents();
    }

    #setupElements() {
        this.#setupQrTypeSelect();
        this.#setupForm();
        this.#setupGenerateButton();
    }

    #setupQrTypeSelect() {
        const selectElement = this.#formBuilder.makeQrTypeSelect();
        this.#selectContainer.appendChild(selectElement);
    }

    #setupForm(formType = FormControlBuilder.QR_TYPE_OPT_LIST.STRING.value) {
        this.#formContainer.replaceChildren();

        const form = this.#formBuilder.makeForm({submitHandler: this.#handleFormSubmit.bind(this)});

        let inputElement;
        switch (formType) {
            case FormControlBuilder.QR_TYPE_OPT_LIST.STRING.value:
                inputElement = document.createElement('input');
                inputElement.setAttribute('type', 'text');
                inputElement.setAttribute('name', FormControlBuilder.DATA_FORM_CONTROLS.STRING.name);
                inputElement.setAttribute('placeholder', 'Enter a string');
                form.appendChild(inputElement);
                this.#formContainer.appendChild(form);
                return;
            case FormControlBuilder.QR_TYPE_OPT_LIST.TEXT.value:
                inputElement = document.createElement('textarea');
                inputElement.setAttribute('name', FormControlBuilder.DATA_FORM_CONTROLS.TEXT.name);
                inputElement.setAttribute('placeholder', 'Enter text');
                form.appendChild(inputElement);
                this.#formContainer.appendChild(form);
                return;
            default:
                throw new Error(`Unknown type ${formType}`);
        }
    }

    #setupGenerateButton() {
        const buttonElement = this.#formBuilder.makeButton();
        this.#generateButtonContainer.appendChild(buttonElement);
    }

    #bindEvents() {
        document.getElementById(FormControlBuilder.QR_TYPE_SELECT_ID).addEventListener('change', this.#handleSelectChange.bind(this));
    }

    #handleSelectChange(event) {
        this.#setupForm(event.target.value);
    }

    #handleFormSubmit(form) {
        if (!form.checkValidity()) {
            return;
        }

        const qrTypeValue = document.getElementById(FormControlBuilder.QR_TYPE_SELECT_ID).value;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        switch (qrTypeValue) {
            case FormControlBuilder.QR_TYPE_OPT_LIST.STRING.value:
                this.#generateQRCode(data[FormControlBuilder.DATA_FORM_CONTROLS.STRING.name]);
                return;
            case FormControlBuilder.QR_TYPE_OPT_LIST.TEXT.value:
                this.#generateQRCode(data[FormControlBuilder.DATA_FORM_CONTROLS.TEXT.name]);
                return;
            default:
                throw new Error(`Unknown type ${qrTypeValue}`);
        }
    }

    #generateQRCode(data) {
        const qr = qrcode(0, 'L');
        qr.addData(data);
        qr.make();
        this.#qrCodeContainer.innerHTML = qr.createSvgTag({scalable: true});
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const formBuilder = new FormControlBuilder();
    new QRCodeApp(formBuilder);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    }
});
