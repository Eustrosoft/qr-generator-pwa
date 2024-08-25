class FormControlBuilder {
  static get QR_TYPE_SELECT_ID() {
    return "qr-type-select";
  }

  static get QR_TYPE_OPT_LIST() {
    return {
      STRING: {
        value: "string",
        label: "String",
      },
      TEXT: {
        value: "text",
        label: "Text",
      },
      TEL: {
        value: "tel",
        label: "Telephone",
      },
      SMS: {
        value: "sms",
        label: "SMS",
      },
      EMAIL: {
        value: "email",
        label: "E-mail",
      },
      WIFI: {
        value: "wifi",
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
            },
            {
              value: "WEP",
              label: "WEP",
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
    options = FormControlBuilder.QR_TYPE_OPT_LIST,
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
  }) {
    const labelEl = document.createElement("label");
    labelEl.append(label);
    const input = document.createElement(tagName);

    for (const attribute of attributes) {
      input.setAttribute(attribute.name, attribute.value);
    }

    labelEl.appendChild(input);
    return labelEl;
  }
}

class QRCodeApp {
  #formBuilder;
  #selectContainer = document.getElementById("select-qr-type-container");
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
    this.#setupQrTypeSelect();
    this.#setupForm();
    this.#setupGenerateButton();
  }

  #setupQrTypeSelect() {
    const selectElement = this.#formBuilder.makeSelect({
      selectAttributes: [
        { name: "id", value: FormControlBuilder.QR_TYPE_SELECT_ID },
      ],
    });
    this.#selectContainer.appendChild(selectElement);
  }

  #setupForm(formType = FormControlBuilder.QR_TYPE_OPT_LIST.STRING.value) {
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

    for (const control of formControls) {
      switch (control.tagName) {
        case "input": {
          const input = this.#formBuilder.makeTextField({
            tagName: control.tagName,
            label: control.label,
            attributes: control.attributes,
          });
          form.append(input);
          break;
        }
        case "textarea": {
          const input = this.#formBuilder.makeTextField({
            tagName: control.tagName,
            label: control.label,
            attributes: control.attributes,
          });
          form.append(input);
          break;
        }
        case "select": {
          const select = this.#formBuilder.makeSelect({
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

    this.#formContainer.appendChild(form);
  }

  #setupGenerateButton() {
    const buttonElement = this.#formBuilder.makeButton();
    this.#generateButtonContainer.appendChild(buttonElement);
  }

  #bindEvents() {
    document
      .getElementById(FormControlBuilder.QR_TYPE_SELECT_ID)
      .addEventListener("change", this.#handleSelectChange.bind(this));
  }

  #handleSelectChange(event) {
    this.#qrCodeContainer.innerHTML = "";
    this.#setupForm(event.target.value);
  }

  #handleFormSubmit(form) {
    if (!form.checkValidity()) {
      return;
    }

    const qrType = document.getElementById(
      FormControlBuilder.QR_TYPE_SELECT_ID,
    ).value;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const qrStr = this.#makeQRStringByType(qrType, data);
    this.#generateQRCode(qrStr);
  }

  #makeQRStringByType(qrType, data) {
    switch (qrType) {
      case FormControlBuilder.QR_TYPE_OPT_LIST.STRING.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.STRING[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_TYPE_OPT_LIST.TEXT.value: {
        return data[
          FormControlBuilder.DATA_FORM_CONTROLS.TEXT[0].attributes[0].value
        ];
      }
      case FormControlBuilder.QR_TYPE_OPT_LIST.TEL.value: {
        const tel =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.TEL[0].attributes[0].value
          ];
        return `tel:${tel ?? ""}`;
      }
      case FormControlBuilder.QR_TYPE_OPT_LIST.SMS.value: {
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
      case FormControlBuilder.QR_TYPE_OPT_LIST.EMAIL.value: {
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
      case FormControlBuilder.QR_TYPE_OPT_LIST.WIFI.value: {
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
        throw new Error(`Unknown type ${qrType}`);
    }
  }

  #generateQRCode(data) {
    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
    const qr = qrcode(0, "L");
    qr.addData(data);
    qr.make();
    this.#qrCodeContainer.innerHTML = qr.createSvgTag({ scalable: true });
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
