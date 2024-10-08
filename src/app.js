class FormControlBuilder {
  static get QR_SETTINGS_FORM_ID() {
    return "qr-settings-form-id";
  }

  static get QR_SETTINGS_FORM_NAME() {
    return "qr-settings-form-name";
  }

  static get QR_SETTINGS_UL_ID() {
    return "qr-settings-form-name";
  }

  static get QR_SETTINGS_FORM_CONTROLS() {
    return [
      {
        tagName: "ul",
        attributes: [{ name: "name", value: "type" }],
      },
      {
        tagName: "select",
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.TYPE_NUMBER_LABEL")}: `,
        attributes: [{ name: "name", value: "qrTypeNumber" }],
        options: [
          {
            value: "0",
            label: LocalizationManager.getTranslation(
              "TYPE_NUMBER_OPTIONS.AUTO_DETECT_LABEL",
            ),
          },
          ...Array.from({ length: 40 }, (_, i) => ({
            value: (i + 1).toString(),
            label: (i + 1).toString(),
          })),
        ],
      },
      {
        tagName: "select",
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.ERROR_CORRECTION_LEVEL_LABEL")}: `,
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
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.MODE_LABEL")}: `,
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
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.FILE_TYPE_LABEL")}: `,
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
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.CELL_SIZE_LABEL")}: `,
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
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.MARGIN_LABEL")}: `,
        attributes: [
          { name: "name", value: "qrMargin" },
          { name: "type", value: "number" },
          { name: "min", value: 0 },
          { name: "max", value: 50 },
          { name: "value", value: 10 },
        ],
      },
      {
        tagName: "input",
        label: `${LocalizationManager.getTranslation("SETTINGS_FORM.WIDTH_LABEL")}: `,
        attributes: [
          { name: "name", value: "width" },
          { name: "type", value: "number" },
          { name: "min", value: 1 },
          { name: "max", value: 2048 },
          { name: "value", value: 500 },
        ],
      },
    ];
  }

  static get QR_FORM_TYPE_OPT_LIST() {
    return {
      QXYZ: {
        value: "QXYZ",
        label: LocalizationManager.getTranslation("QR_TYPE_OPTIONS.QXYZ_LABEL"),
      },
      TEXT: {
        value: "TEXT",
        label: LocalizationManager.getTranslation("QR_TYPE_OPTIONS.TEXT_LABEL"),
      },
      URL: {
        value: "URL",
        label: LocalizationManager.getTranslation("QR_TYPE_OPTIONS.URL_LABEL"),
      },
      PHONE: {
        value: "PHONE",
        label: LocalizationManager.getTranslation(
          "QR_TYPE_OPTIONS.PHONE_LABEL",
        ),
      },
      SMS: {
        value: "SMS",
        label: LocalizationManager.getTranslation("QR_TYPE_OPTIONS.SMS_LABEL"),
      },
      EMAIL: {
        value: "EMAIL",
        label: LocalizationManager.getTranslation(
          "QR_TYPE_OPTIONS.EMAIL_LABEL",
        ),
      },
      CONTACT: {
        value: "CONTACT",
        label: LocalizationManager.getTranslation(
          "QR_TYPE_OPTIONS.CONTACT_LABEL",
        ),
      },
      WIFI: {
        value: "WIFI",
        label: LocalizationManager.getTranslation("QR_TYPE_OPTIONS.WIFI_LABEL"),
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
      QXYZ: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("QXYZ_FORM.CODE_LABEL"),
          attributes: [
            { name: "name", value: "q" },
            { name: "type", value: "text" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("QXYZ_FORM.PASSWORD_LABEL"),
          attributes: [
            { name: "name", value: "p" },
            { name: "type", value: "text" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("QXYZ_FORM.DOCUMENT_LABEL"),
          attributes: [
            { name: "name", value: "d" },
            { name: "type", value: "text" },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("QXYZ_FORM.SITE_LABEL"),
          attributes: [
            { name: "name", value: "site" },
            { name: "type", value: "text" },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      TEXT: [
        {
          tagName: "textarea",
          label: LocalizationManager.getTranslation("TEXT_FORM.TEXT_LABEL"),
          attributes: [
            { name: "name", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "TEXT_FORM.TEXT_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      URL: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("URL_FORM.URL_LABEL"),
          attributes: [
            { name: "name", value: "url" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "URL_FORM.URL_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      PHONE: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("PHONE_FORM.PHONE_LABEL"),
          attributes: [
            { name: "name", value: "phone" },
            { name: "type", value: "tel" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "PHONE_FORM.PHONE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      SMS: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("PHONE_FORM.PHONE_LABEL"),
          attributes: [
            { name: "name", value: "phone" },
            { name: "type", value: "tel" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "PHONE_FORM.PHONE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "textarea",
          label: LocalizationManager.getTranslation("SMS_FORM.SMS_LABEL"),
          attributes: [
            { name: "name", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "SMS_FORM.SMS_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      EMAIL: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("EMAIL_FORM.EMAIL_LABEL"),
          attributes: [
            { name: "name", value: "email" },
            { name: "type", value: "email" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "EMAIL_FORM.EMAIL_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("EMAIL_FORM.SUBJECT_LABEL"),
          attributes: [
            { name: "name", value: "subject" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "EMAIL_FORM.SUBJECT_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "textarea",
          label: LocalizationManager.getTranslation("EMAIL_FORM.TEXT_LABEL"),
          attributes: [
            { name: "name", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "EMAIL_FORM.TEXT_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      CONTACT: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.FIRST_NAME_LABEL",
          ),
          attributes: [
            { name: "name", value: "firstName" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.FIRST_NAME_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.LAST_NAME_LABEL",
          ),
          attributes: [
            { name: "name", value: "lastName" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.LAST_NAME_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.ORGANIZATION_LABEL",
          ),
          attributes: [
            { name: "name", value: "organization" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.ORGANIZATION_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("CONTACT_FORM.TITLE_LABEL"),
          attributes: [
            { name: "name", value: "title" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.TITLE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("EMAIL_FORM.EMAIL_LABEL"),
          attributes: [
            { name: "name", value: "email" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "EMAIL_FORM.EMAIL_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("CONTACT_FORM.PHONE_LABEL"),
          attributes: [
            { name: "name", value: "phone" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.PHONE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.MOBILE_PHONE_LABEL",
          ),
          attributes: [
            { name: "name", value: "mobilePhone" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.MOBILE_PHONE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("CONTACT_FORM.FAX_LABEL"),
          attributes: [
            { name: "name", value: "fax" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.FAX_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.COUNTRY_LABEL",
          ),
          attributes: [
            { name: "name", value: "country" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.COUNTRY_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.REGION_LABEL",
          ),
          attributes: [
            { name: "name", value: "region" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.REGION_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("CONTACT_FORM.CITY_LABEL"),
          attributes: [
            { name: "name", value: "city" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.CITY_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.STREET_LABEL",
          ),
          attributes: [
            { name: "name", value: "street" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.STREET_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation(
            "CONTACT_FORM.POSTCODE_LABEL",
          ),
          attributes: [
            { name: "name", value: "postcode" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.POSTCODE_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("CONTACT_FORM.URL_LABEL"),
          attributes: [
            { name: "name", value: "url" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "CONTACT_FORM.URL_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
      ],
      WIFI: [
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("WIFI_FORM.SSID_LABEL"),
          attributes: [
            { name: "name", value: "ssid" },
            { name: "type", value: "text" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "WIFI_FORM.SSID_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "input",
          label: LocalizationManager.getTranslation("WIFI_FORM.PASSWORD_LABEL"),
          attributes: [
            { name: "name", value: "password" },
            { name: "type", value: "password" },
            {
              name: "placeholder",
              value: LocalizationManager.getTranslation(
                "WIFI_FORM.PASSWORD_PLACEHOLDER",
              ),
            },
          ],
          styles: {
            display: "block",
          },
        },
        {
          tagName: "select",
          label: LocalizationManager.getTranslation(
            "WIFI_FORM.ENCRYPTION_LABEL",
          ),
          attributes: [{ name: "name", value: "encryption" }],
          options: [
            {
              value: "WPA",
              label: "WPA",
            },
            {
              value: "WEP",
              label: "WEP",
            },
            {
              value: "nopass",
              label: LocalizationManager.getTranslation(
                "WIFI_FORM.OPEN_NETWORK_LABEL",
              ),
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
    labelText = "",
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

  makeQrTypeMenu({
    ulId = FormControlBuilder.QR_SETTINGS_UL_ID,
    listTag = "ul",
    elementListTag = "li",
    itemList = FormControlBuilder.QR_FORM_TYPE_OPT_LIST,
    formControlName = "type",
    listStyles = {
      display: "flex",
      gap: "10px",
      padding: "0",
      margin: "0",
      "list-style": "none",
    },
    listItemStyles = {
      cursor: "pointer",
    },
  }) {
    const container = document.createElement("div");
    const list = document.createElement(listTag);
    list.setAttribute("id", ulId);
    const optList = Object.values(itemList);
    for (let i = 0; i < optList.length; i++) {
      const listItem = document.createElement(elementListTag);
      listItem.setAttribute("data-value", optList[i].value);
      for (const key of Object.keys(listItemStyles)) {
        listItem.style[key] = listItemStyles[key];
      }
      listItem.append(optList[i].label);
      list.append(listItem);
    }
    const formControl = document.createElement("input");
    formControl.setAttribute("type", "text");
    formControl.setAttribute("name", formControlName);
    formControl.setAttribute("hidden", "hidden");

    formControl.addEventListener("change", function () {
      this.setAttribute("value", this.value);
      for (const lItem of list.getElementsByTagName("li")) {
        lItem.style.textDecoration = "none";
      }
      const el = list.querySelector(`[data-value="${this.value}"]`);
      el.style.textDecoration = "underline";
    });

    for (const listItem of list.children) {
      listItem.addEventListener("click", function () {
        for (const lItem of list.getElementsByTagName("li")) {
          lItem.style.textDecoration = "none";
        }
        this.style.textDecoration = "underline";
        const value = this.getAttribute("data-value");
        formControl.value = value;
        formControl.setAttribute("value", value);
        const event = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        formControl.dispatchEvent(event);
      });
    }

    for (const key of Object.keys(listStyles)) {
      list.style[key] = listStyles[key];
    }

    list.children[0].dispatchEvent(
      new Event("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    container.append(list, formControl);
    return container;
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
    buttonText = "",
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
        case "ul": {
          const list = this.makeQrTypeMenu({ listTag: "ul" });
          form.append(list);
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

class URLManager {
  static KEYS = Object.freeze({
    TYPE: "type",
    CORRECTION_LEVEL: "correctionLevel",
    FILE_TYPE: "fileType",
    WIDTH: "width",
    TEXT: "text",
    URL: "url",
    PHONE: "phone",
    EMAIL: "email",
    SUBJECT: "subject",
    SSID: "ssid",
    PASSWORD: "password",
    ENCRYPTION: "encryption",
    Q: "q",
    P: "p",
    D: "d",
    SITE: "site",
    FIRST_NAME: "firstName",
    LAST_NAME: "lastName",
    ORGANIZATION: "organization",
    TITLE: "title",
    MOBILE_PHONE: "mobilePhone",
    FAX: "fax",
    COUNTRY: "country",
    REGION: "region",
    CITY: "city",
    STREET: "street",
    POSTCODE: "postcode",
  });

  static parseURLSearchParams() {
    return new URLSearchParams(new URL(window.location.href).search);
  }

  static isUrlParsable(url = "") {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }

  static makeUrl({ initUrl, initSearchParams }) {
    const url = new URL(initUrl);
    url.search = new URLSearchParams(initSearchParams).toString();
    return url.toString();
  }

  static normalizeUrl({
    url = "",
    clearCredentials = true,
    clearPort = true,
    clearSearchParams = true,
    clearHash = true,
  }) {
    try {
      if (!url.startsWith("https://") && !url.startsWith("http://")) {
        url = `https://${url}`;
      }

      const normalizedUrl = new URL(url);
      if (clearCredentials) {
        normalizedUrl.username = "";
        normalizedUrl.password = "";
      }
      if (clearPort) {
        normalizedUrl.port = "";
      }
      if (clearSearchParams) {
        normalizedUrl.searchParams.forEach((_, key) => {
          normalizedUrl.searchParams.delete(key);
        });
      }
      if (clearHash) {
        normalizedUrl.hash = "";
      }

      return normalizedUrl.toString();
    } catch (e) {
      return "";
    }
  }

  static updateUrlWithParams(paramsObj = {}) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(paramsObj)) {
      params.append(key, value);
    }
    const currentUrl = new URL(window.location.href);
    currentUrl.search = params.toString();
    window.history.replaceState({}, "", currentUrl);
  }
}

class LocalizationManager {
  #currentBrowserLanguage = navigator.language || navigator.userLanguage;
  #currentAppLanguage = LocalizationManager.SUPPORTED_LANG_LIST[0];

  static TRANSLATIONS = {};

  static get SUPPORTED_LANG_LIST() {
    return ["ru-RU", "en-US"];
  }

  getBrowserLang() {
    if (this.#currentBrowserLanguage !== undefined) {
      let closestCode = undefined;
      let maxMatches = 0;
      for (const lang of LocalizationManager.SUPPORTED_LANG_LIST) {
        const matches = lang.startsWith(this.#currentBrowserLanguage)
          ? lang.split("-").length
          : 0;
        if (matches > maxMatches) {
          closestCode = lang;
          maxMatches = matches;
        }
      }
      return closestCode ?? "en-US";
    } else {
      return "en-US";
    }
  }

  static getTranslation(jsonPath = "", fallback = "Unknown text") {
    return jsonPath
      .split(".")
      .reduce(
        (obj, i) => (obj && obj[i] ? obj[i] : fallback),
        this.TRANSLATIONS,
      );
  }

  async loadLanguage(lang = this.getBrowserLang()) {
    this.#currentAppLanguage = lang;
    const res = await fetch(`./locale/${lang}.json`).catch((error) =>
      console.error("Error loading language file:", error),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch lang");
    }

    LocalizationManager.TRANSLATIONS = await res.json();

    return res.ok;
  }
}

class QRCodeApp {
  #formBuilder;
  #qrSettingsFormContainer = document.getElementById("qr-settings-container");
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
    this.#qrSettingsFormContainer.append(filledForm);
  }

  #setupForm(formType = FormControlBuilder.QR_FORM_TYPE_OPT_LIST.QXYZ.value) {
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
    const buttonElement = this.#formBuilder.makeButton({
      buttonText: LocalizationManager.getTranslation("GENERATE_BUTTON_LABEL"),
    });
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
    const searchParams = URLManager.parseURLSearchParams();
    if (!searchParams.size) {
      return;
    }

    this.#applySearchParamsToForm({
      searchParams,
      paramKey: URLManager.KEYS.TYPE,
      form: this.#settingsForm,
      formControlName: URLManager.KEYS.TYPE,
      paramValidatorFn: (value) =>
        Object.keys(FormControlBuilder.QR_FORM_TYPE_OPT_LIST).includes(value),
    });

    this.#applySearchParamsToForm({
      searchParams,
      paramKey: URLManager.KEYS.CORRECTION_LEVEL,
      form: this.#settingsForm,
      formControlName: URLManager.KEYS.CORRECTION_LEVEL,
      paramValidatorFn: (value) =>
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[2].options
          .map((opt) => opt.value)
          .includes(value),
    });

    this.#applySearchParamsToForm({
      searchParams,
      paramKey: URLManager.KEYS.FILE_TYPE,
      form: this.#settingsForm,
      formControlName: URLManager.KEYS.FILE_TYPE,
      paramValidatorFn: (value) =>
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options
          .map((opt) => opt.value)
          .includes(value),
    });

    this.#applySearchParamsToForm({
      searchParams,
      paramKey: URLManager.KEYS.WIDTH,
      form: this.#settingsForm,
      formControlName: URLManager.KEYS.WIDTH,
      paramValidatorFn: (value) => +value >= 1 && +value <= 2048,
    });
  }

  #prefillQRForm() {
    const searchParams = URLManager.parseURLSearchParams();
    if (!searchParams.size) {
      return;
    }

    const formType =
      this.#settingsForm[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[0].attributes[0].value
      ].value;
    if (!formType) {
      return;
    }

    switch (formType) {
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.QXYZ.value: {
        for (const key of [
          URLManager.KEYS.Q,
          URLManager.KEYS.P,
          URLManager.KEYS.D,
          URLManager.KEYS.SITE,
        ]) {
          this.#applySearchParamsToForm({
            searchParams,
            paramKey: key,
            form: this.#currentQRForm,
            formControlName: key,
            paramValidatorFn: (value) => typeof value === "string",
            shouldConvertToUpperCase: false,
          });
        }
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.TEXT.value: {
        this.#applySearchParamsToForm({
          searchParams,
          paramKey: URLManager.KEYS.TEXT,
          form: this.#currentQRForm,
          formControlName: URLManager.KEYS.TEXT,
          paramValidatorFn: (value) => typeof value === "string",
          shouldConvertToUpperCase: false,
        });
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.URL.value: {
        this.#applySearchParamsToForm({
          searchParams,
          paramKey: URLManager.KEYS.URL,
          form: this.#currentQRForm,
          formControlName: URLManager.KEYS.URL,
          paramValidatorFn: (value) => typeof value === "string",
          shouldConvertToUpperCase: false,
        });
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.PHONE.value: {
        this.#applySearchParamsToForm({
          searchParams,
          paramKey: URLManager.KEYS.PHONE,
          form: this.#currentQRForm,
          formControlName: URLManager.KEYS.PHONE,
          paramValidatorFn: (value) => typeof value === "string",
          shouldConvertToUpperCase: false,
        });
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.SMS.value: {
        for (const key of [URLManager.KEYS.PHONE, URLManager.KEYS.TEXT]) {
          this.#applySearchParamsToForm({
            searchParams,
            paramKey: key,
            form: this.#currentQRForm,
            formControlName: key,
            paramValidatorFn: (value) => typeof value === "string",
            shouldConvertToUpperCase: false,
          });
        }
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.EMAIL.value: {
        for (const key of [
          URLManager.KEYS.EMAIL,
          URLManager.KEYS.SUBJECT,
          URLManager.KEYS.TEXT,
        ]) {
          this.#applySearchParamsToForm({
            searchParams,
            paramKey: key,
            form: this.#currentQRForm,
            formControlName: key,
            paramValidatorFn: (value) => typeof value === "string",
            shouldConvertToUpperCase: false,
          });
        }
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.CONTACT.value: {
        for (const key of [
          URLManager.KEYS.FIRST_NAME,
          URLManager.KEYS.LAST_NAME,
          URLManager.KEYS.ORGANIZATION,
          URLManager.KEYS.TITLE,
          URLManager.KEYS.EMAIL,
          URLManager.KEYS.PHONE,
          URLManager.KEYS.MOBILE_PHONE,
          URLManager.KEYS.FAX,
          URLManager.KEYS.COUNTRY,
          URLManager.KEYS.REGION,
          URLManager.KEYS.CITY,
          URLManager.KEYS.STREET,
          URLManager.KEYS.POSTCODE,
          URLManager.KEYS.URL,
        ]) {
          this.#applySearchParamsToForm({
            searchParams,
            paramKey: key,
            form: this.#currentQRForm,
            formControlName: key,
            paramValidatorFn: (value) => typeof value === "string",
            shouldConvertToUpperCase: false,
          });
        }
        break;
      }
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.WIFI.value: {
        for (const key of [
          URLManager.KEYS.SSID,
          URLManager.KEYS.PASSWORD,
          URLManager.KEYS.ENCRYPTION,
        ]) {
          this.#applySearchParamsToForm({
            searchParams,
            paramKey: key,
            form: this.#currentQRForm,
            formControlName: key,
            paramValidatorFn: (value) => typeof value === "string",
            shouldConvertToUpperCase: key === URLManager.KEYS.ENCRYPTION,
          });
        }
        break;
      }
      default: {
        throw new Error(`Unknown form type ${formType}`);
      }
    }
  }

  #applySearchParamsToForm({
    searchParams,
    paramKey = "",
    form,
    formControlName = "",
    paramValidatorFn = (value) => false,
    shouldConvertToUpperCase = true,
  }) {
    let paramValue = searchParams.get(paramKey);
    if (shouldConvertToUpperCase && paramValue) {
      paramValue = paramValue.toUpperCase();
    }
    const isParamValueValid = paramValidatorFn(paramValue);
    if (isParamValueValid) {
      this.#patchFormControl({
        form: form,
        formControlName: formControlName,
        value: paramValue,
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
        `No such form control with name: ${formControlName} in form: ${form.getAttribute("name")}`,
      );
    }
    formControl.value = value;
    formControl.dispatchEvent(new Event(eventType, eventConfig));
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
    const fileType =
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
    const width =
      +qrSettingsData[
        FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[7].attributes[0].value
      ];
    const qrFormData = new FormData(form);
    const qrData = Object.fromEntries(qrFormData);
    const qrStr = this.#makeQRStringByType(qrFormType, qrData);
    try {
      this.#generateQRCode({
        data: qrStr,
        typeNumber,
        errorCorrectionLevel,
        mode,
        fileType,
        cellSize,
        margin,
        width,
      });
      const urlPatchObj = {
        [FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[0].attributes[0].value]:
          qrFormType,
        [FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[2].attributes[0].value]:
          errorCorrectionLevel,
        [FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].attributes[0].value]:
          fileType,
        [FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[7].attributes[0].value]:
          width,
        ...qrData,
      };
      URLManager.updateUrlWithParams(urlPatchObj);
    } catch (e) {
      console.error(e);
      alert(LocalizationManager.getTranslation("QR_CODE_LIB_ERROR"));
    }
  }

  #makeQRStringByType(qrFormType, data) {
    switch (qrFormType) {
      case FormControlBuilder.QR_FORM_TYPE_OPT_LIST.QXYZ.value: {
        const q =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.QXYZ[0].attributes[0].value
          ];
        const p =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.QXYZ[1].attributes[0].value
          ];
        const d =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.QXYZ[2].attributes[0].value
          ];
        const site =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.QXYZ[3].attributes[0].value
          ];
        const defaultSite = "https://qr.qxyz.ru";
        let normalizedSite = URLManager.normalizeUrl({
          url: site,
        });
        if (!site.length && !normalizedSite) {
          normalizedSite = defaultSite;
        }
        const searchParamsArray = [
          ["q", q],
          ["p", p],
          ["d", d],
        ].filter(([_, value]) => value.length > 0);
        return URLManager.makeUrl({
          initUrl: normalizedSite,
          initSearchParams: searchParamsArray,
        });
      }
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
        const firstName =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[0].attributes[0].value
          ];
        const lastName =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[1].attributes[0].value
          ];
        const organization =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[2].attributes[0].value
          ];
        const title =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[3].attributes[0].value
          ];
        const email =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[4].attributes[0].value
          ];
        const phone =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[5].attributes[0].value
          ];
        const mobilePhone =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[6].attributes[0].value
          ];
        const fax =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[7].attributes[0].value
          ];
        const country =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[8].attributes[0].value
          ];
        const region =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[9].attributes[0].value
          ];
        const city =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[10].attributes[0]
              .value
          ];
        const street =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[11].attributes[0]
              .value
          ];
        const postcode =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[12].attributes[0]
              .value
          ];
        const url =
          data[
            FormControlBuilder.DATA_FORM_CONTROLS.CONTACT[13].attributes[0]
              .value
          ];
        const vCardString = `
          BEGIN:VCARD\n
          VERSION:3.0\n
          N:${lastName ?? ""};${firstName ?? ""}\n
          FN:${firstName ?? ""} ${lastName ?? ""}\n
          TITLE:${title ?? ""}\n
          ORG:${organization ?? ""}\n
          URL:${url ?? ""}\n
          EMAIL;TYPE=INTERNET:${email ?? ""}\n
          TEL;TYPE=voice,home,pref:${phone ?? ""}\n
          TEL;TYPE=voice,cell,pref:${mobilePhone ?? ""}\n
          TEL;TYPE=fax,home,pref:${fax ?? ""}\n
          ADR:;;${street ?? ""};${city ?? ""};${region ?? ""};${postcode ?? ""};${country ?? ""}\n
          END:VCARD
        `;
        return vCardString
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0)
          .join("\n");
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
        return `WIFI:S:${ssid ?? ""};T:${encryption ?? ""};P:${password ?? ""};;`;
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
    fileType = "gif",
    cellSize = 10,
    margin = 10,
    width = 500,
  }) {
    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data, mode);
    qr.make();
    this.#qrCodeContainer.replaceChildren();
    this.#qrCodeContainer.style.cssText = "";
    switch (fileType.toUpperCase()) {
      case FormControlBuilder.QR_SETTINGS_FORM_CONTROLS[4].options[0].value: {
        const domParser = new DOMParser();
        const imgHtmlString = qr.createImgTag(cellSize, margin);
        const parsedDoc = domParser.parseFromString(imgHtmlString, "text/html");
        const img = parsedDoc.getElementsByTagName("img")[0];
        const imgSize = width || qr.getModuleCount() * cellSize + margin * 2;
        img.setAttribute("height", "");
        img.setAttribute("width", imgSize.toString());
        img.setAttribute("alt", "QR");
        img.setAttribute("title", "QR");
        this.#qrCodeContainer.append(img);
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
        const imgSize = width || qr.getModuleCount() * cellSize + margin * 2;
        img.setAttribute("width", imgSize.toString());
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
        throw new Error(`Unsupported file type: ${fileType}`);
    }
  }
}

const start = async () => {
  const localizationManager = new LocalizationManager();
  await localizationManager.loadLanguage();
  const formBuilder = new FormControlBuilder();
  new QRCodeApp(formBuilder);
};

await start();

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
