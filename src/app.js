class FormControlBuilder {
  static get QR_SETTINGS_FORM_ID() {
    return "qr-settings-form-id";
  }

  static get QR_SETTINGS_FORM_NAME() {
    return "qr-settings-form-name";
  }

  static get QR_SETTINGS_FORM_CONTROLS() {
    return [
      {
        tagName: "select",
        attributes: [{ name: "name", value: "type" }],
      },
      {
        tagName: "select",
        label: "Select Type Number: ",
        attributes: [{ name: "name", value: "qrTypeNumber" }],
        options: [
          {
            value: "0",
            label: "Auto Detect",
          },
          ...Array.from({ length: 40 }, (_, i) => ({
            value: (i + 1).toString(),
            label: (i + 1).toString(),
          })),
        ],
      },
      {
        tagName: "select",
        label: "Select Error Correction Level: ",
        attributes: [{ name: "name", value: "correctionLevel" }],
        options: [
          {
            value: "L",
            label: "L(7%)",
          },
          {
            value: "M",
            label: "M(15%)",
          },
          {
            value: "Q",
            label: "Q(25%)",
          },
          {
            value: "H",
            label: "H(30%)",
          },
        ],
      },
      {
        tagName: "select",
        label: "Select Mode: ",
        attributes: [{ name: "name", value: "qrMode" }],
        options: [
          {
            value: "Byte",
            label: "Byte",
          },
          // {
          //   value: "Numeric",
          //   label: "Numeric",
          // },
          // {
          //   value: "Alphanumeric",
          //   label: "Alphanumeric",
          // },
          // {
          //   value: "Kanji",
          //   label: "Kanji",
          // },
        ],
      },
      {
        tagName: "select",
        label: "Select File Type: ",
        attributes: [{ name: "name", value: "fileType" }],
        options: [
          { value: "GIF", label: "gif" },
          { value: "SVG", label: "svg" },
          { value: "BASE64", label: "base64" },
          { value: "TABLE", label: "HTML Table" },
        ],
      },
      {
        tagName: "input",
        label: "Cell Size: ",
        attributes: [
          { name: "name", value: "qrCellSize" },
          { name: "type", value: "number" },
          { name: "min", value: 1 },
          { name: "max", value: 50 },
          { name: "value", value: 10 },
        ],
      },
      {
        tagName: "input",
        label: "Margin: ",
        attributes: [
          { name: "name", value: "qrMargin" },
          { name: "type", value: "number" },
          { name: "min", value: 0 },
          { name: "max", value: 50 },
          { name: "value", value: 0 },
        ],
      },
    ];
  }

  static get QR_FORM_TYPE_OPT_LIST() {
    return {
      TEXT: {
        value: "TEXT",
        label: "Text",
      },
      URL: {
        value: "URL",
        label: "URL",
      },
      PHONE: {
        value: "PHONE",
        label: "Telephone",
      },
      SMS: {
        value: "SMS",
        label: "SMS",
      },
      EMAIL: {
        value: "EMAIL",
        label: "E-mail",
      },
      CONTACT: {
        value: "CONTACT",
        label: "Contact",
      },
      WIFI: {
        value: "WIFI",
        label: "WI-FI",
      },
    };
  }

  static get DATA_FORM_ID() {
    return "qr-data-form-id";
  }

  static get DATA_FORM_NAME() {
    return "qr-data-form-name";
  }

  static get DATA_FORM_CONTROLS() {
    return {
      TEXT: [
        {
          tagName: "textarea",
          label: "Text",
          attributes: [
            { name: "name", value: "text" },
            { name: "placeholder", value: "Enter text" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      URL: [
        {
          tagName: "input",
          label: "URL",
          attributes: [
            { name: "name", value: "url" },
            { name: "type", value: "text" },
            { name: "placeholder", value: "Enter a string or url" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      PHONE: [
        {
          tagName: "input",
          label: "Telephone",
          attributes: [
            { name: "name", value: "phone" },
            { name: "type", value: "tel" },
            { name: "placeholder", value: "Enter phone" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      SMS: [
        {
          tagName: "input",
          label: "Telephone",
          attributes: [
            { name: "name", value: "phone" },
            { name: "type", value: "tel" },
            { name: "placeholder", value: "Enter phone" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "textarea",
          label: "SMS",
          attributes: [
            { name: "name", value: "text" },
            { name: "placeholder", value: "Enter sms text" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      EMAIL: [
        {
          tagName: "input",
          label: "E-Mail",
          attributes: [
            { name: "name", value: "email" },
            { name: "type", value: "email" },
            { name: "placeholder", value: "Enter e-mail" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: "Subject",
          attributes: [
            { name: "name", value: "subject" },
            { name: "type", value: "text" },
            { name: "placeholder", value: "Subject" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "textarea",
          label: "Body",
          attributes: [
            { name: "name", value: "text" },
            { name: "placeholder", value: "Body" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      WIFI: [
        {
          tagName: "input",
          label: "SSID",
          attributes: [
            { name: "name", value: "ssid" },
            { name: "type", value: "text" },
            { name: "placeholder", value: "SSID" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: "Password",
          attributes: [
            { name: "name", value: "password" },
            { name: "type", value: "password" },
            { name: "placeholder", value: "Password" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "select",
          label: "Encryption",
          attributes: [
            { name: "name", value: "encryption" },
            { name: "placeholder", value: "Encryption" },
          ],
          options: [
            {
              value: "WPA",
              label: "WPA",
            },
            {
              value: "WEP",
              label: "WEP",
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
    };
  }

  static get GENERATE_BUTTON_ID() {
    return "qr-generate-button";
  }

  makeSelect({
    labelText = "Select QR Code Type: ",
    selectAttributes = [],
    options = FormControlBuilder.QR_FORM_TYPE_OPT_LIST,
    styles = {},
  } = {}) {
    const selectLabel = document.createElement("label");
    selectLabel.append(labelText);
    const selectElement = document.createElement("select");
    for (const attribute of selectAttributes) {
      selectElement.setAttribute(attribute.name, attribute.value);
    }
    const optList = Object.values(options);

    for (let i = 0; i < optList.length; i++) {
      const opt = document.createElement("option");
      opt.setAttribute("value", optList[i].value);
      opt.append(optList[i].label);
      if (optList[i]?.selected) {
        opt.setAttribute("selected", "selected");
      }
      selectElement.add(opt);
    }

    for (const key of Object.keys(styles)) {
      selectElement.style[key] = styles[key];
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
    const form = document.createElement("form");
    form.setAttribute("id", formId);
    form.setAttribute("name", formName);
    form.append(...formControls);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitHandler(form);
    });
    return form;
  }

  makeButton({
    buttonId = FormControlBuilder.GENERATE_BUTTON_ID,
    type = "submit",
    form = FormControlBuilder.DATA_FORM_ID,
    buttonText = "Generate QR Code",
  } = {}) {
    const button = document.createElement("button");
    button.setAttribute("id", buttonId);
    button.setAttribute("type", type);
    button.setAttribute("form", form);
    button.append(buttonText);
    return button;
  }

  makeTextField({
    tagName = "input",
    label = "",
    attributes = [{ name: "type", value: "text" }],
    styles = {},
  }) {
    const labelEl = document.createElement("label");
    labelEl.append(label);
    const input = document.createElement(tagName);

    for (const attribute of attributes) {
      input.setAttribute(attribute.name, attribute.value);
    }

    for (const key of Object.keys(styles)) {
      input.style[key] = styles[key];
    }

    labelEl.appendChild(input);
    return labelEl;
  }

  makeFormWithControls({ form, controls = [] }) {
    for (const control of controls) {
      switch (control.tagName) {
        case "input": {
          const input = this.makeTextField({
            tagName: control.tagName,
            label: control.label,
            attributes: control.attributes,
            styles: control.styles ?? {},
          });
          form.append(input);
          break;
        }
        case "textarea": {
          const input = this.makeTextField({
            tagName: control.tagName,
            label: control.label,
            attributes: control.attributes,
            styles: control.styles ?? {},
          });
          form.append(input);
          break;
        }
        case "select": {
          const select = this.makeSelect({
            labelText: control.label,
            selectAttributes: control.attributes,
            options: control.options,
            styles: control.styles ?? {},
          });
          form.append(select);
          break;
        }
        default: {
          throw new Error(`No constructor for tagName: ${control.tagName}`);
        }
      }
    }
    return form;
  }
}

class SearchParamsParser {
  static get KEYS() {
    return Object.freeze({
      TYPE: "type",
      CORRECTION_LEVEL: "correctionLevel",
      FILE_TYPE: "fileType",
      TEXT: "text",
    });
  }

  static parseURLSearchParams() {
    return new URLSearchParams(new URL(window.location.href).search);
  }
}

class QRCodeApp {
  #formBuilder;
  #qrSettingsContainer = document.getElementById("qr-settings-container");
  #formContainer = document.getElementById("form-container");
  #generateButtonContainer = document.getElementById(
    "generate-button-container",
  );
  #qrCodeContainer = document.getElementById("qrcode-container");

  #settingsForm;
  #currentQRForm;

  constructor(formBuilder) {
    this.#formBuilder = formBuilder;
    this.#init();
  }

  #init() {
    this.#setupElements();
    this.#bindEvents();
    this.#prefillSettingsForm();
    this.#prefillQRForm();
  }

  #setupElements() {
    this.#setupQrSettingsForm();
    this.#setupForm();
    this.#setupGenerateButton();
  }

  #setupQrSettingsForm() {
    const settingsForm = this.#formBuilder.makeForm({
      formId: FormControlBuilder.QR_SETTINGS_FORM_ID,
      formName: FormControlBuilder.QR_SETTINGS_FORM_NAME,
    });

    const filledForm = this.#formBuilder.makeFormWithControls({
      form: settingsForm,
      controls: FormControlBuilder.QR_SETTINGS_FORM_CONTROLS,
    });

    this.#settingsForm = filledForm;
    this.#qrSettingsContainer.append(filledForm);
  }

  #setupForm(formType = FormControlBuilder.QR_FORM_TYPE_OPT_LIST.TEXT.value) {
    this.#formContainer.replaceChildren();

    const form = this.#formBuilder.makeForm({
      formName: formType,
      submitHandler: this.#handleFormSubmit.bind(this),
    });

    const formControls =
      FormControlBuilder.DATA_FORM_CONTROLS[formType.toUpperCase()];

    if (!formControls?.length) {
      throw new Error(`No controls defined for type ${formType}`);
    }

    const filledForm = this.#formBuilder.makeFormWithControls({
      form,
      controls: formControls,
    });

    this.#currentQRForm = filledForm;
    this.#formContainer.appendChild(filledForm);
  }

  #setupGenerateButton() {
    const buttonElement = this.#formBuilder.makeButton();
    this.#generateButtonContainer.appendChild(buttonElement);
  }

  #bindEvents() {
    document
      .getElementById(FormControlBuilder.QR_SETTINGS_FORM_ID)
      .elements[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[0].attributes[0].value
      ].addEventListener("change", this.#handleSelectChange.bind(this));
  }

  #prefillSettingsForm() {
    const searchParams = SearchParamsParser.parseURLSearchParams();
    if (!searchParams.size) {
      return;
    }

    const qrTypeParamValue = searchParams
      .get(SearchParamsParser.KEYS.TYPE)
      ?.toUpperCase();
    const qrTypeParamValueValid = Object.keys(
      FormControlBuilder.QR_FORM_TYPE_OPT_LIST,
    ).includes(qrTypeParamValue);
    if (qrTypeParamValueValid) {
      this.#patchFormControl({
        form: this.#settingsForm,
        formControlName: SearchParamsParser.KEYS.TYPE,
        value: qrTypeParamValue,
      });
    }

    const qrCorrectionValue = searchParams
      .get(SearchParamsParser.KEYS.CORRECTION_LEVEL)
      ?.toUpperCase();
    const isQrCorrectionValueValid =
      FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[2].options
        .map((opt) => opt.value)
        .includes(qrCorrectionValue);
    if (isQrCorrectionValueValid) {
      this.#patchFormControl({
        form: this.#settingsForm,
        formControlName: SearchParamsParser.KEYS.CORRECTION_LEVEL,
        value: qrCorrectionValue,
      });
    }

    const qrFileTypeValue = searchParams
      .get(SearchParamsParser.KEYS.FILE_TYPE)
      ?.toUpperCase();
    const isQrFileTypeValueValid =
      FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options
        .map((opt) => opt.value)
        .includes(qrFileTypeValue);
    if (isQrFileTypeValueValid) {
      this.#patchFormControl({
        form: this.#settingsForm,
        formControlName: SearchParamsParser.KEYS.FILE_TYPE,
        value: qrFileTypeValue,
      });
    }
  }

  #patchFormControl({
    form,
    formControlName,
    value,
    eventType = "change",
    eventConfig = {
      bubbles: true,
      cancelable: true,
    },
  }) {
    const formControl = form[formControlName];
    if (!formControl) {
      throw new Error(
        `No such form control: ${formControlName} in ${form.getAttribute("name")}`,
      );
    }
    formControl.value = value;
    formControl.dispatchEvent(new Event(eventType, eventConfig));
  }

  #prefillQRForm() {
    return;
  }

  #handleSelectChange(event) {
    this.#qrCodeContainer.replaceChildren();
    this.#qrCodeContainer.style.cssText = "";
    this.#setupForm(event.target.value);
  }

  #handleFormSubmit(form) {
    const settingsForm = document.getElementById(
      FormControlBuilder.QR_SETTINGS_FORM_ID,
    );
    settingsForm.requestSubmit();

    if (!form.checkValidity() || !settingsForm.checkValidity()) {
      return;
    }
    const qrSettingsFormData = new FormData(settingsForm);
    const qrSettingsData = Object.fromEntries(qrSettingsFormData);

    const qrFormType =
      qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[0].attributes[0].value
      ];
    const typeNumber =
      +qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[1].attributes[0].value
      ];
    const errorCorrectionLevel =
      qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[2].attributes[0].value
      ];
    const mode =
      qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[3].attributes[0].value
      ];
    const representation =
      qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].attributes[0].value
      ];
    const cellSize =
      +qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[5].attributes[0].value
      ];
    const margin =
      +qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[6].attributes[0].value
      ];
    const qrFormData = new FormData(form);
    const qrData = Object.fromEntries(qrFormData);
    const qrStr = this.#makeQRStringByType(qrFormType, qrData);
    this.#generateQRCode({
      data: qrStr,
      typeNumber,
      errorCorrectionLevel,
      mode,
      representation,
      cellSize,
      margin,
    });
  }

  #makeQRStringByType(qrFormType, data) {
    switch (qrFormType) {
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.URL.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.URL[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.TEXT.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.TEXT[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.PHONE.value: {
        const tel =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.PHONE[0].attributes[0].value
          ];
        return `tel:${tel ?? ""}`;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.SMS.value: {
        const tel =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.SMS[0].attributes[0].value
          ];
        const text =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.SMS[1].attributes[0].value
          ];
        return `SMSTO:${tel ?? ""}:${text ?? ""}`;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.EMAIL.value: {
        const email =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.EMAIL[0].attributes[0].value
          ];
        const subject =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.EMAIL[1].attributes[0].value
          ];
        const body =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.EMAIL[2].attributes[0].value
          ];
        return `mailto:${email ?? ""}?subject=${subject ?? ""}&body=${body ?? ""}`;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.CONTACT.value: {
        throw new Error("Not implemented");
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.WIFI.value: {
        const ssid =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.WIFI[0].attributes[0].value
          ];
        const password =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.WIFI[1].attributes[0].value
          ];
        const encryption =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.WIFI[2].attributes[0].value
          ];
        return `WIFI:S:${ssid ?? ""}T:${encryption ?? ""};P:${password ?? ""};;`;
      }
      default:
        throw new Error(`Unknown type ${qrFormType}`);
    }
  }

  #generateQRCode({
    data = "",
    typeNumber = 0,
    errorCorrectionLevel = "M",
    mode = "Byte",
    representation = "gif",
    cellSize = 2,
    margin = 4,
  }) {
    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data, mode);
    qr.make();
    this.#qrCodeContainer.replaceChildren();
    this.#qrCodeContainer.style.cssText = "";
    switch (representation) {
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[0].value: {
        this.#qrCodeContainer.innerHTML = qr.createImgTag(cellSize, margin);
        break;
      }
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[1].value: {
        const svgText = qr.createSvgTag({
          cellSize,
          margin,
          scalable: true,
        });
        const encodedData = `data:image/svg+xml;base64,${btoa(svgText)}`;
        const img = document.createElement("img");
        const imgSize = qr.getModuleCount() * cellSize + margin * 2;
        img.setAttribute("width", imgSize.toString());
        img.setAttribute("height", imgSize.toString());
        img.setAttribute("alt", "QR");
        img.setAttribute("title", "QR");
        img.setAttribute("src", encodedData);
        this.#qrCodeContainer.append(img);
        break;
      }
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[2].value: {
        this.#qrCodeContainer.style.border = "1px solid #ccc";
        this.#qrCodeContainer.style.padding = "10px";
        this.#qrCodeContainer.style.overflowWrap = "break-word";
        this.#qrCodeContainer.style.whiteSpace = "pre-wrap";
        this.#qrCodeContainer.style.fontFamily = "monospace";
        this.#qrCodeContainer.innerHTML = qr.createDataURL(cellSize, margin);
        break;
      }
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[3].value: {
        this.#qrCodeContainer.innerHTML = qr.createTableTag(cellSize, margin);
        break;
      }
      default:
        throw new Error(`Unsupported type of representation ${representation}`);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const formBuilder = new FormControlBuilder();
  new QRCodeApp(formBuilder);

  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("./service-worker.js")
  //     .then((registration) => {
  //       console.log(
  //         "ServiceWorker registration successful with scope: ",
  //         registration.scope,
  //       );
  //     })
  //     .catch((error) => {
  //       console.log("ServiceWorker registration failed: ", error);
  //     });
  // }
});
