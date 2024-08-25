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
        attributes: [{ name: "name", value: "qrFormType" }],
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
        attributes: [{ name: "name", value: "qrErrCorrectionLevel" }],
        options: [
          {
            value: "L",
            label: "L(7%)",
          },
          {
            value: "M",
            label: "M(15%)",
            selected: true,
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
            value: "Numeric",
            label: "Numeric",
          },
          {
            value: "Alphanumeric",
            label: "Alphanumeric",
          },
          {
            value: "Byte",
            label: "Byte",
            selected: true,
          },
          {
            value: "Kanji",
            label: "Kanji",
          },
        ],
      },
      {
        tagName: "select",
        label: "Select Representation: ",
        attributes: [{ name: "name", value: "qrRepresentation" }],
        options: [
          { value: "gif", label: "gif", selected: true },
          { value: "svg", label: "svg", selected: false },
          { value: "base64", label: "base64", selected: false },
          { value: "table", label: "HTML Table", selected: false },
        ],
      },
      {
        tagName: "input",
        label: "Cell Size: ",
        makeInputDisplayBlock: false,
        attributes: [
          { name: "name", value: "qrCellSize" },
          { name: "type", value: "number" },
          { name: "min", value: 2 },
          { name: "max", value: 100 },
        ],
      },
      {
        tagName: "input",
        label: "Margin: ",
        makeInputDisplayBlock: false,
        attributes: [
          { name: "name", value: "qrMargin" },
          { name: "type", value: "number" },
          { name: "min", value: 0 },
        ],
      },
    ];
  }

  static get QR_FORM_TYPE_OPT_LIST() {
    return {
      STRING: {
        value: "string",
        label: "String",
        selected: true,
      },
      TEXT: {
        value: "text",
        label: "Text",
        selected: false,
      },
      TEL: {
        value: "tel",
        label: "Telephone",
        selected: false,
      },
      SMS: {
        value: "sms",
        label: "SMS",
        selected: false,
      },
      EMAIL: {
        value: "email",
        label: "E-mail",
        selected: false,
      },
      WIFI: {
        value: "wifi",
        label: "WI-FI",
        selected: false,
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
      STRING: [
        {
          tagName: "input",
          label: "String",
          attributes: [
            { name: "name", value: "string" },
            { name: "type", value: "text" },
            { name: "placeholder", value: "Enter a string" },
          ],
        },
      ],
      TEXT: [
        {
          tagName: "textarea",
          label: "Text",
          attributes: [
            { name: "name", value: "text" },
            { name: "placeholder", value: "Enter text" },
          ],
        },
      ],
      TEL: [
        {
          tagName: "input",
          label: "Telephone",
          attributes: [
            { name: "name", value: "tel" },
            { name: "type", value: "tel" },
            { name: "placeholder", value: "Enter tel" },
          ],
        },
      ],
      SMS: [
        {
          tagName: "input",
          label: "Telephone",
          attributes: [
            { name: "name", value: "tel" },
            { name: "type", value: "tel" },
            { name: "placeholder", value: "Enter tel" },
          ],
        },
        {
          tagName: "textarea",
          label: "SMS",
          attributes: [
            { name: "name", value: "text" },
            { name: "placeholder", value: "Enter sms text" },
          ],
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
        },
        {
          tagName: "input",
          label: "Subject",
          attributes: [
            { name: "name", value: "subject" },
            { name: "type", value: "text" },
            { name: "placeholder", value: "Subject" },
          ],
        },
        {
          tagName: "textarea",
          label: "Body",
          attributes: [
            { name: "name", value: "body" },
            { name: "placeholder", value: "Body" },
          ],
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
        },
        {
          tagName: "input",
          label: "Password",
          attributes: [
            { name: "name", value: "password" },
            { name: "type", value: "password" },
            { name: "placeholder", value: "Password" },
          ],
        },
        {
          tagName: "select",
          label: "Encryption",
          makeSelectDisplayBlock: true,
          attributes: [
            { name: "name", value: "encryption" },
            { name: "placeholder", value: "Encryption" },
          ],
          options: [
            {
              value: "WPA",
              label: "WPA",
              selected: true,
            },
            {
              value: "WEP",
              label: "WEP",
              selected: false,
            },
          ],
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
    makeSelectDisplayBlock = false,
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

    if (makeSelectDisplayBlock) {
      selectElement.style.display = "block";
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
    makeInputDisplayBlock = false,
  }) {
    const labelEl = document.createElement("label");
    labelEl.append(label);
    const input = document.createElement(tagName);

    for (const attribute of attributes) {
      input.setAttribute(attribute.name, attribute.value);
    }

    if (makeInputDisplayBlock) {
      input.style.display = "block";
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
            makeInputDisplayBlock: control?.makeInputDisplayBlock ?? true,
          });
          form.append(input);
          break;
        }
        case "textarea": {
          const input = this.makeTextField({
            tagName: control.tagName,
            label: control.label,
            attributes: control.attributes,
            makeInputDisplayBlock: control?.makeInputDisplayBlock ?? true,
          });
          form.append(input);
          break;
        }
        case "select": {
          const select = this.makeSelect({
            labelText: control.label,
            selectAttributes: control.attributes,
            options: control.options,
            makeSelectDisplayBlock: control?.makeSelectDisplayBlock ?? false,
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

class QRCodeApp {
  #formBuilder;
  #qrSettingsContainer = document.getElementById("qr-settings-container");
  #formContainer = document.getElementById("form-container");
  #generateButtonContainer = document.getElementById(
    "generate-button-container",
  );
  #qrCodeContainer = document.getElementById("qrcode-container");

  constructor(formBuilder) {
    this.#formBuilder = formBuilder;
    this.#init();
  }

  #init() {
    this.#setupElements();
    this.#bindEvents();
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

    this.#qrSettingsContainer.append(filledForm);
  }

  #setupForm(formType = FormControlBuilder.QR_FORM_TYPE_OPT_LIST.STRING.value) {
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
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.STRING.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.STRING[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.TEXT.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.TEXT[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.TEL.value: {
        const tel =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.TEL[0].attributes[0].value
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
    this.#qrCodeContainer.style.cssText = "";
    switch (representation) {
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[0].value: {
        this.#qrCodeContainer.innerHTML = qr.createImgTag(cellSize, margin);
        break;
      }
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[1].value: {
        this.#qrCodeContainer.style.width = "50%";
        this.#qrCodeContainer.innerHTML = qr.createSvgTag({
          cellSize,
          margin,
          scalable: true,
        });
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

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope,
        );
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error);
      });
  }
});
