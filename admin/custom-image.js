CMS.registerEditorComponent({
  id: "resizable-image",
  label: "可調整圖片",

  fields: [
    {
      name: "image",
      label: "圖片",
      widget: "image",
      media_library: {
        allow_multiple: false
      }
    },
    {
      name: "alt",
      label: "ALT TEXT",
      widget: "string",
      required: false
    },
    {
      name: "title",
      label: "TITLE",
      widget: "string",
      required: false
    },
    {
      name: "width",
      label: "圖片寬度 (%)",
      widget: "number",
      value_type: "int",
      min: 10,
      max: 100,
      default: 100
    }
  ],

  pattern:
    /^<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+title="([^"]*)")?\s+style="width:(\d+)%;height:auto;">$/m,

  fromBlock: function(match) {
    return {
      image: match[1],
      alt: match[2] || "",
      title: match[3] || "",
      width: parseInt(match[4], 10) || 100
    };
  },

  toBlock: function(data) {
    var width = parseInt(data.width, 10) || 100;

    return '<img src="' +
      (data.image || '') +
      '" alt="' +
      (data.alt || '') +
      '" title="' +
      (data.title || '') +
      '" style="width:' +
      width +
      '%;height:auto;">';
  },

  toPreview: function(data) {
    var width = parseInt(data.width, 10) || 100;

    return (
      '<img src="' +
      (data.image || '') +
      '" alt="' +
      (data.alt || '') +
      '" title="' +
      (data.title || '') +
      '" style="width:' +
      width +
      '%;height:auto;">'
    );
  }
});
