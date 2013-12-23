var obj = {
  "properties": [
    {
      "name": "CKBUILDER_CONFIG",
      "access": "",
      "virtual": false,
      "description": "This is a Drupal-optimized build of CKEditor.\n\nYou may re-use it at any time at http://ckeditor.com/builder to build\nCKEditor again. Alternatively, use the \"build.sh\" script to build it locally.\nIf you do so, be sure to pass it the \"-s\" flag. So: \"sh build.sh -s\".\n\nNOTE:\n   This file is not used by CKEditor, you may remove it.\n   Changing this file will not change your CKEditor configuration.",
      "type": ""
    },
    {
      "name": "metadata",
      "access": "",
      "virtual": false,
      "description": "Returns the metadata object for the first member of the jQuery object.",
      "type": {
        "names": [
          "jQuery"
        ]
      }
    },
    {
      "name": "instances",
      "access": "",
      "virtual": false,
      "description": "Holds references to instantiated CollapsibleDetails objects.",
      "type": ""
    },
    {
      "name": "{Object}",
      "access": "",
      "virtual": false,
      "description": "Expose offsets to other scripts to avoid having to recalculate offsets",
      "type": {
        "names": [
          "Object"
        ]
      }
    },
    {
      "name": "{jQueryElement}",
      "access": "",
      "virtual": false,
      "description": "",
      "type": {
        "names": [
          "jQueryElement"
        ]
      }
    },
    {
      "name": "tables",
      "access": "",
      "virtual": false,
      "description": "This will store the state of all processed tables.",
      "type": {
        "names": [
          "Array"
        ]
      }
    },
    {
      "name": "minHeight",
      "access": "",
      "virtual": false,
      "description": "Minimum height in pixels for the table to have a sticky header.",
      "type": ""
    },
    {
      "name": "tableOffset",
      "access": "",
      "virtual": false,
      "description": "Absolute position of the table on the page.",
      "type": ""
    },
    {
      "name": "tableHeight",
      "access": "",
      "virtual": false,
      "description": "Absolute position of the table on the page.",
      "type": ""
    },
    {
      "name": "stickyVisible",
      "access": "",
      "virtual": false,
      "description": "Boolean storing the sticky header visibility state.",
      "type": ""
    },
    {
      "name": "states",
      "access": "",
      "virtual": false,
      "description": "A list (sequence) of all possible states an entity can be in during\nin-place editing.",
      "type": ""
    },
    {
      "name": "states",
      "access": "",
      "virtual": false,
      "description": "A list (sequence) of all possible states a field can be in during in-place\nediting.",
      "type": ""
    }
  ],
  "functions": [
    {
      "name": "ok",
      "access": "",
      "virtual": false,
      "description": "Asserts rough true-ish result.",
      "parameters": [],
      "examples": [
        " ok( \"asdfasdf\".length > 5, \"There must be at least 5 chars\" );"
      ]
    },
    {
      "name": "equal",
      "access": "",
      "virtual": false,
      "description": "Assert that the first two arguments are equal, with an optional message.\nPrints out both actual and expected values.",
      "parameters": [],
      "examples": [
        " equal( format( \"Received {0} bytes.\", 2), \"Received 2 bytes.\", \"format() replaces {0} with next argument\" );"
      ]
    },
    {
      "name": "notEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "propEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "notPropEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "deepEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "notDeepEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "strictEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "notStrictEqual",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "setupSummary",
      "access": "",
      "virtual": false,
      "description": "Initialize and setup summary events and markup.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "setupLegend",
      "access": "",
      "virtual": false,
      "description": "Initialize and setup legend markup.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onLegendClick",
      "access": "",
      "virtual": false,
      "description": "Handle legend clicks",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onSummaryUpdated",
      "access": "",
      "virtual": false,
      "description": "Update summary",
      "parameters": [],
      "examples": []
    },
    {
      "name": "toggle",
      "access": "",
      "virtual": false,
      "description": "Toggle the visibility of a details element using smooth animations.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "calculateOffset",
      "access": "",
      "virtual": false,
      "description": "Expose method to compute a single edge offsets.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "matchMedia",
      "access": "",
      "virtual": false,
      "description": "matchMedia polyfill.",
      "parameters": [
        {
          "name": "doc",
          "type": "DOMElement",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "window",
          "type": "window",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "Drupal",
          "type": "Object",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "function",
        "description": ""
      }
    },
    {
      "name": "release",
      "access": "",
      "virtual": false,
      "description": "Restores a former tabbingContext when an active tabbingContext is released.\n\nThe TabbingManager stack of tabbingContext instances will be unwound from\nthe top-most released tabbingContext down to the first non-released\ntabbingContext instance. This non-released instance is then activated.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "activate",
      "access": "",
      "virtual": false,
      "description": "Makes all elements outside the of the tabbingContext's set untabbable.\n\nElements made untabble have their original tabindex and autfocus values\nstored so that they might be restored later when this tabbingContext\nis deactivated.",
      "parameters": [
        {
          "name": "tabbingContext",
          "type": "TabbingContext",
          "description": "The TabbingContext instance that has been activated.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "deactivate",
      "access": "",
      "virtual": false,
      "description": "Restores that tabbable state of a tabbingContext's disabled elements.\n\nElements that were made untabble have their original tabindex and autfocus\nvalues restored.",
      "parameters": [
        {
          "name": "tabbingContext",
          "type": "TabbingContext",
          "description": "The TabbingContext instance that has been deactivated.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "recordTabindex",
      "access": "",
      "virtual": false,
      "description": "Records the tabindex and autofocus values of an untabbable element.",
      "parameters": [
        {
          "name": "$set",
          "type": "jQuery",
          "description": "The set of elements that have been disabled.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "level",
          "type": "Number",
          "description": "The stack level for which the tabindex attribute should be recorded.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "restoreTabindex",
      "access": "",
      "virtual": false,
      "description": "Restores the tabindex and autofocus values of a reactivated element.",
      "parameters": [
        {
          "name": "$el",
          "type": "jQueryElement",
          "description": "The element that is being reactivated.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "level",
          "type": "Number",
          "description": "The stack level for which the tabindex attribute should be restored.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "release",
      "access": "",
      "virtual": false,
      "description": "Releases this TabbingContext.\n\nOnce a TabbingContext object is released, it can never be activated again.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "activate",
      "access": "",
      "virtual": false,
      "description": "Activates this TabbingContext.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "deactivate",
      "access": "",
      "virtual": false,
      "description": "Deactivates this TabbingContext.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "createSticky",
      "access": "",
      "virtual": false,
      "description": "Create the duplicate header.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stickyPosition",
      "access": "",
      "virtual": false,
      "description": "Set absolute position of sticky.",
      "parameters": [
        {
          "name": "offsetTop",
          "type": "Number",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "offsetLeft",
          "type": "Number",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "checkStickyVisible",
      "access": "",
      "virtual": false,
      "description": "Returns true if sticky is currently visible.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onScroll",
      "access": "",
      "virtual": false,
      "description": "Check if sticky header should be displayed.\n\nThis function is throttled to once every 250ms to avoid unnecessary calls.",
      "parameters": [
        {
          "name": "e",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "recalculateSticky",
      "access": "",
      "virtual": false,
      "description": "Event handler: recalculates position of the sticky table header.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "Event being triggered.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "parseEditorDOM",
      "access": "",
      "virtual": false,
      "description": "Converts the active toolbar DOM structure to an object representation.",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.ckeditor.ConfigurationModel",
          "description": "The state model for the CKEditor configuration.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "isDirty",
          "type": "Boolean",
          "description": "Tracks whether the active toolbar DOM structure has been changed.\n  isDirty is toggled back to false in this method.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options",
          "type": "Object",
          "description": "An object that includes:\n  - Boolean broadcast: (optional) A flag that controls whether a\n    CKEditorToolbarChanged event should be fired for configuration\n    changes.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "getCKEditorFeatures",
      "access": "",
      "virtual": false,
      "description": "Asynchronously retrieve the metadata for all available CKEditor features.\n\nIn order to get a list of all features needed by CKEditor, we create a\nhidden CKEditor instance, then check the CKEditor's \"allowedContent\"\nfilter settings. Because creating an instance is expensive, a callback\nmust be provided that will receive a hash of Drupal.EditorFeature\nfeatures keyed by feature (button) name.",
      "parameters": [
        {
          "name": "CKEditorConfig",
          "type": "Object",
          "description": "An object that represents the configuration settings for a CKEditor\n  editor component.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "callback",
          "type": "function",
          "description": "A function to invoke when the instanceReady event is fired by the\n  CKEditor object.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "getFeatureForButton",
      "access": "",
      "virtual": false,
      "description": "Retrieves the feature for a given button from featuresMetadata. Returns\nfalse if the given button is in fact a divider.",
      "parameters": [
        {
          "name": "button",
          "type": "String",
          "description": "The name of a CKEditor button.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "Object",
        "description": "The feature metadata object for a button."
      }
    },
    {
      "name": "disableFeaturesDisallowedByFilters",
      "access": "",
      "virtual": false,
      "description": "Checks buttons against filter settings; disables disallowed buttons.",
      "parameters": [
        {
          "name": "features",
          "type": "Object",
          "description": "A map of Drupal.EditorFeature objects.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "broadcastConfigurationChanges",
      "access": "",
      "virtual": false,
      "description": "Sets up broadcasting of CKEditor toolbar configuration changes.",
      "parameters": [
        {
          "name": "$ckeditorToolbar",
          "type": "jQuery",
          "description": "The active toolbar DOM element wrapped in jQuery.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "getButtonList",
      "access": "",
      "virtual": false,
      "description": "Returns the list of buttons from an editor configuration.",
      "parameters": [
        {
          "name": "config",
          "type": "Object",
          "description": "A CKEditor configuration object.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "Array",
        "description": "A list of buttons in the CKEditor configuration."
      }
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onGroupNameClick",
      "access": "",
      "virtual": false,
      "description": "Handles clicks to a button group name.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onGroupNamesToggleClick",
      "access": "",
      "virtual": false,
      "description": "Handles clicks on the button group names toggle button.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onAddGroupButtonClick",
      "access": "",
      "virtual": false,
      "description": "Prompts the user to provide a name for a new button group; inserts it.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "endGroupDrag",
      "access": "",
      "virtual": false,
      "description": "Handles jQuery Sortable stop sort of a button group.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "ui",
          "type": "Object",
          "description": "A jQuery.ui.sortable argument that contains information about the\n  elements involved in the sort action.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "startButtonDrag",
      "access": "",
      "virtual": false,
      "description": "Handles jQuery Sortable start sort of a button.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "ui",
          "type": "Object",
          "description": "A jQuery.ui.sortable argument that contains information about the\n  elements involved in the sort action.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "endButtonDrag",
      "access": "",
      "virtual": false,
      "description": "Handles jQuery Sortable stop sort of a button.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "ui",
          "type": "Object",
          "description": "A jQuery.ui.sortable argument that contains information about the\n  elements involved in the sort action.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "applySorting",
      "access": "",
      "virtual": false,
      "description": "Invokes jQuery.sortable() on new buttons and groups in a CKEditor config.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "insertPlaceholders",
      "access": "",
      "virtual": false,
      "description": "Wraps the invocation of methods to insert blank groups and rows.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "insertPlaceholderRow",
      "access": "",
      "virtual": false,
      "description": "Inserts a blank row at the bottom of the CKEditor configuration.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "insertNewGroupButtons",
      "access": "",
      "virtual": false,
      "description": "Inserts a button in each row that will add a new CKEditor button group.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onPressButton",
      "access": "",
      "virtual": false,
      "description": "Handles keypresses on a CKEditor configuration button.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onPressGroup",
      "access": "",
      "virtual": false,
      "description": "Handles keypresses on a CKEditor configuration group.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "announceMove",
      "access": "",
      "virtual": false,
      "description": "Calls announce on buttons and groups when their position is changed.",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.ckeditor.ConfigurationModel",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "isDirty",
          "type": "Boolean",
          "description": "A model attribute that indicates if the changed toolbar configuration\n  has been stored or not.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onFocus",
      "access": "",
      "virtual": false,
      "description": "Handles the focus event of elements in the active and available toolbars.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "announceButtonGroupPosition",
      "access": "",
      "virtual": false,
      "description": "Announces the current position of a button group.",
      "parameters": [
        {
          "name": "$group",
          "type": "jQueryElement",
          "description": "A jQuery set that contains an li element that wraps a group of buttons.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "announceButtonPosition",
      "access": "",
      "virtual": false,
      "description": "Announces current button position.",
      "parameters": [
        {
          "name": "$button",
          "type": "jQueryElement",
          "description": "A jQuery set that contains an li element that wraps a button.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "announceButtonHelp",
      "access": "",
      "virtual": false,
      "description": "Provides help information when a button is clicked.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "announceSeparatorHelp",
      "access": "",
      "virtual": false,
      "description": "Provides help information when a separator is clicked.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "toggleOpen",
      "access": "",
      "virtual": false,
      "description": "Opens or closes the contextual link.\n\nIf it is opened, then also give focus.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "close",
      "access": "",
      "virtual": false,
      "description": "Closes this contextual link.\n\nDoes not call blur() because we want to allow a contextual link to have\nfocus, yet be closed for example when hovering.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "focus",
      "access": "",
      "virtual": false,
      "description": "Gives focus to this contextual link.\n\nAlso closes + removes focus from every other contextual link.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "blur",
      "access": "",
      "virtual": false,
      "description": "Removes focus from this contextual link, unless it is open.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "focus",
      "access": "",
      "virtual": false,
      "description": "Sets focus on the model; Clears the timer that dismisses the links.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "persist",
      "access": "",
      "virtual": false,
      "description": "Model change handler; persists the isViewing value to localStorage.\n\nisViewing === true is the default, so only stores in localStorage when\nit's not the default value (i.e. false).",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.contextualToolbar.Model",
          "description": "A Drupal.contextualToolbar.Model model.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "isViewing",
          "type": "Boolean",
          "description": "The value of the isViewing attribute in the model.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "manageTabbing",
      "access": "",
      "virtual": false,
      "description": "Limits tabbing to the contextual links and edit mode toolbar tab.",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.contextualToolbar.Model",
          "description": "A Drupal.contextualToolbar.Model model.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "isViewing",
          "type": "Boolean",
          "description": "The value of the isViewing attribute in the model.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "announceTabbingConstraint",
      "access": "",
      "virtual": false,
      "description": "Announces the current tabbing constraint.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onKeypress",
      "access": "",
      "virtual": false,
      "description": "Responds to esc and tab key press events.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditUISettings",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "loadForm",
      "access": "",
      "virtual": false,
      "description": "Loads the form for this field, displays it on top of the actual field.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "removeForm",
      "access": "",
      "virtual": false,
      "description": "Removes the form for this field and detaches behaviors and event handlers.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "save",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "showValidationErrors",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditedElement",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditUISettings",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "revert",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "Updates FieldModels' states when an EntityModel change occurs.",
      "parameters": [
        {
          "name": "Drupal.edit.EntityModel",
          "type": "",
          "description": "entityModel",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated entity. One of Drupal.edit.EntityModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options",
          "type": "Object",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "fieldStateChange",
      "access": "",
      "virtual": false,
      "description": "Reacts to state changes in this entity's fields.",
      "parameters": [
        {
          "name": "Drupal.edit.FieldModel",
          "type": "",
          "description": "fieldModel\n  The model of the field whose state property changed.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "save",
      "access": "",
      "virtual": false,
      "description": "Fires an AJAX request to the REST save URL for an entity.",
      "parameters": [
        {
          "name": "options",
          "type": "",
          "description": "An object of options that contains:\n    - success: (optional) A function to invoke if the entity is success-\n    fully saved.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "validate",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [
        {
          "name": "attrs",
          "type": "Object",
          "description": "The attributes changes in the save or set call.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following option:\n    - String reason (optional): a string that conveys a particular reason\n      to allow for an exceptional state change.\n    - Array accept-field-states (optional) An array of strings that\n    represent field states that the entities must be in to validate. For\n    example, if accept-field-states is ['candidate', 'highlighted'], then\n    all the fields of the entity must be in either of these two states\n    for the save or set call to validate and proceed.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "_fieldsHaveAcceptableStates",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [
        {
          "name": "acceptedFieldStates",
          "type": "Array",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "",
        "description": "Boolean"
      }
    },
    {
      "name": "destroy",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "sync",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "followsStateSequence",
      "access": "",
      "virtual": false,
      "description": "Indicates whether the 'from' state comes before the 'to' state.",
      "parameters": [
        {
          "name": "from",
          "type": "String",
          "description": "One of Drupal.edit.EntityModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "to",
          "type": "String",
          "description": "One of Drupal.edit.EntityModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "",
        "description": "Boolean"
      }
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "destroy",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "sync",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "validate",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEntityID",
      "access": "",
      "virtual": false,
      "description": "Extracts the entity ID from this field's ID.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "String\n  An entity ID: a string of the format `<entity type>/<id>`."
      }
    },
    {
      "name": "getViewMode",
      "access": "",
      "virtual": false,
      "description": "Extracts the view mode ID from this field's ID.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "String\n  A view mode ID."
      }
    },
    {
      "name": "findOtherViewModes",
      "access": "",
      "virtual": false,
      "description": "Find other instances of this field with different view modes.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "Array\n  An array containing view mode IDs."
      }
    },
    {
      "name": "followsStateSequence",
      "access": "",
      "virtual": false,
      "description": "Indicates whether the 'from' state comes before the 'to' state.",
      "parameters": [
        {
          "name": "from",
          "type": "String",
          "description": "One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "to",
          "type": "String",
          "description": "One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "",
        "description": "Boolean"
      }
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following keys:\n  - Drupal.edit.AppModel model: the application state model\n  - Drupal.edit.EntityCollection entitiesCollection: all on-page entities\n  - Drupal.edit.FieldCollection fieldsCollection: all on-page fields",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "appStateChange",
      "access": "",
      "virtual": false,
      "description": "Handles setup/teardown and state changes when the active entity changes.",
      "parameters": [
        {
          "name": "entityModel",
          "type": "Drupal.edit.EntityModel",
          "description": "An instance of the EntityModel class.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.EntityModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "acceptEditorStateChange",
      "access": "",
      "virtual": false,
      "description": "Accepts or reject editor (Editor) state changes.\n\nThis is what ensures that the app is in control of what happens.",
      "parameters": [
        {
          "name": "from",
          "type": "String",
          "description": "The previous state.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "to",
          "type": "String",
          "description": "The new state.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "context",
          "type": [
            "null",
            "Object"
          ],
          "description": "The context that is trying to trigger the state change.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "The fieldModel to which this change applies.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "setupEditor",
      "access": "",
      "virtual": false,
      "description": "Sets up the in-place editor for the given field.\n\nMust happen before the fieldModel's state is changed to 'candidate'.",
      "parameters": [
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "The field for which an in-place editor must be set up.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "teardownEditor",
      "access": "",
      "virtual": false,
      "description": "Tears down the in-place editor for the given field.\n\nMust happen after the fieldModel's state is changed to 'inactive'.",
      "parameters": [
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "The field for which an in-place editor must be torn down.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "confirmEntityDeactivation",
      "access": "",
      "virtual": false,
      "description": "Asks the user to confirm whether he wants to stop editing via a modal.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "editorStateChange",
      "access": "",
      "virtual": false,
      "description": "Reacts to field state changes; tracks global state.",
      "parameters": [
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "renderUpdatedField",
      "access": "",
      "virtual": false,
      "description": "Render an updated field (a field whose 'html' attribute changed).",
      "parameters": [
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "The FieldModel whose 'html' attribute changed.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "html",
          "type": "String",
          "description": "The updated 'html' attribute.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following keys:\n  - Boolean propagation: whether this change to the 'html' attribute\n    occurred because of the propagation of changes to another instance of\n    this field.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "propagateUpdatedField",
      "access": "",
      "virtual": false,
      "description": "Propagates the changes to an updated field to all instances of that field.",
      "parameters": [
        {
          "name": "updatedField",
          "type": "Drupal.edit.FieldModel",
          "description": "The FieldModel whose 'html' attribute changed.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "html",
          "type": "String",
          "description": "The updated 'html' attribute.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following keys:\n  - Boolean propagation: whether this change to the 'html' attribute\n    occurred because of the propagation of changes to another instance of\n    this field.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "rerenderedFieldToCandidate",
      "access": "",
      "virtual": false,
      "description": "If the new in-place editable field is for the entity that's currently\nbeing edited, then transition it to the 'candidate' state.\n\nThis happens when a field was modified, saved and hence rerendered.",
      "parameters": [
        {
          "name": "fieldModel",
          "type": "Drupal.edit.FieldModel",
          "description": "A field that was just added to the collection of fields.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "enforceSingleActiveEntity",
      "access": "",
      "virtual": false,
      "description": "EntityModel Collection change handler, called on change:isActive, enforces\na single active entity.",
      "parameters": [
        {
          "name": "The",
          "type": "Drupal.edit.EntityModel",
          "description": "entityModel instance whose active state has changed.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "events",
      "access": "",
      "virtual": false,
      "description": "",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options.model",
          "type": "Drupal.edit.EntityModel",
          "description": "the associated entity's model",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options.appModel",
          "type": "Drupal.edit.AppModel",
          "description": "the application state model",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "options.strings",
          "type": "Object<String>",
          "description": "the strings for the \"Quick edit\" link",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}\n\nTypically you would want to override this method to set the originalValue\nattribute in the FieldModel to such a value that your in-place editor can\nrevert to the original value when necessary.\n\nIf you override this method, you should call this method (the parent\nclass' initialize()) first, like this:\n  Drupal.edit.EditorView.prototype.initialize.call(this, options);\n\nFor an example, @see Drupal.edit.editors.plain_text.",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following keys:\n  - Drupal.edit.EditorModel model: the in-place editor state model\n  - Drupal.edit.FieldModel fieldModel: the field model",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "remove",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditedElement",
      "access": "",
      "virtual": false,
      "description": "Returns the edited element.\n\nFor some single cardinality fields, it may be necessary or useful to\nnot in-place edit (and hence decorate) the DOM element with the\ndata-edit-field-id attribute (which is the field's wrapper), but a specific\nelement within the field's wrapper.\ne.g. using a WYSIWYG editor on a body field should happen on the DOM\nelement containing the text itself, not on the field wrapper.\n\nFor example, @see Drupal.edit.editors.plain_text.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery\n  A jQuery-wrapped DOM element."
      }
    },
    {
      "name": "getEditUISettings",
      "access": "",
      "virtual": false,
      "description": "Returns 3 Edit UI settings that depend on the in-place editor:\n - Boolean padding: indicates whether padding should be applied to the\n   edited element, to guarantee legibility of text.\n - Boolean unifiedToolbar: provides the in-place editor with the ability to\n   insert its own toolbar UI into Edit's tightly integrated toolbar.\n - Boolean fullWidthToolbar: indicates whether Edit's tightly integrated\n   toolbar should consume the full width of the element, rather than being\n   just long enough to accommodate a label.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "Determines the actions to take given a change of state.",
      "parameters": [
        {
          "name": "Drupal.edit.FieldModel",
          "type": "",
          "description": "fieldModel",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "revert",
      "access": "",
      "virtual": false,
      "description": "Reverts the modified value back to the original value (before editing\nstarted).",
      "parameters": [],
      "examples": []
    },
    {
      "name": "save",
      "access": "",
      "virtual": false,
      "description": "Saves the modified value in the in-place editor for this field.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "showValidationErrors",
      "access": "",
      "virtual": false,
      "description": "Shows validation error messages.\n\nShould be called when the state is changed to 'invalid'.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "removeValidationErrors",
      "access": "",
      "virtual": false,
      "description": "Cleans up validation error messages.\n\nShould be called when the state is changed to 'candidate' or 'saving'. In\nthe case of the latter: the user has modified the value in the in-place\neditor again to attempt to save again. In the case of the latter: the\ninvalid value was discarded.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}\n\nAssociated with the DOM root node of an editable entity.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "remove",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "remove",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "windowChangeHandler",
      "access": "",
      "virtual": false,
      "description": "Repositions the entity toolbar on window scroll and resize.",
      "parameters": [
        {
          "name": "jQuery.Eevent",
          "type": "",
          "description": "event",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "fieldStateChange",
      "access": "",
      "virtual": false,
      "description": "Determines the actions to take given a change of state.",
      "parameters": [
        {
          "name": "Drupal.edit.FieldModel",
          "type": "",
          "description": "model",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "position",
      "access": "",
      "virtual": false,
      "description": "Uses the jQuery.ui.position() method to position the entity toolbar.",
      "parameters": [
        {
          "name": "jQuery|DOM",
          "type": "",
          "description": "element\n  (optional) The element against which the entity toolbar is positioned.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onClickSave",
      "access": "",
      "virtual": false,
      "description": "Set the model state to 'saving' when the save button is clicked.",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onClickCancel",
      "access": "",
      "virtual": false,
      "description": "Sets the model state to candidate when the cancel button is clicked.",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onMouseenter",
      "access": "",
      "virtual": false,
      "description": "Clears the timeout that will eventually reposition the entity toolbar.\n\nWithout this, it may reposition itself, away from the user's cursor!",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "buildToolbarEl",
      "access": "",
      "virtual": false,
      "description": "Builds the entity toolbar HTML; attaches to DOM; sets starting position.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getToolbarRoot",
      "access": "",
      "virtual": false,
      "description": "Returns the DOM element that fields will attach their toolbars to.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery\n  The DOM element that fields will attach their toolbars to."
      }
    },
    {
      "name": "label",
      "access": "",
      "virtual": false,
      "description": "Generates a state-dependent label for the entity toolbar.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "addClass",
      "access": "",
      "virtual": false,
      "description": "Adds classes to a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "classes",
          "type": "String",
          "description": "A string of space-delimited class names that will be applied to the\n  wrapping element of the toolbar group.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "removeClass",
      "access": "",
      "virtual": false,
      "description": "Removes classes from a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "classes",
          "type": "String",
          "description": "A string of space-delimited class names that will be removed from the\n  wrapping element of the toolbar group.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "_find",
      "access": "",
      "virtual": false,
      "description": "Finds a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery\n  The toolgroup DOM element."
      }
    },
    {
      "name": "show",
      "access": "",
      "virtual": false,
      "description": "Shows a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "description": "An object with the following keys:\n  - Drupal.edit.EditorView editorView: the editor object view.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "remove",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "Determines the actions to take given a change of state.",
      "parameters": [
        {
          "name": "Drupal.edit.FieldModel",
          "type": "",
          "description": "model",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "renderChanged",
      "access": "",
      "virtual": false,
      "description": "Adds a class to the edited element that indicates whether the field has\nbeen changed by the user (i.e. locally) or the field has already been\nchanged and stored before by the user (i.e. remotely, stored in TempStore).",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onMouseEnter",
      "access": "",
      "virtual": false,
      "description": "Starts hover; transitions to 'highlight' state.",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onMouseLeave",
      "access": "",
      "virtual": false,
      "description": "Stops hover; transitions to 'candidate' state.",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onClick",
      "access": "",
      "virtual": false,
      "description": "Transition to 'activating' stage.",
      "parameters": [
        {
          "name": "event",
          "type": "jQuery",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "decorate",
      "access": "",
      "virtual": false,
      "description": "Adds classes used to indicate an elements editable state.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "undecorate",
      "access": "",
      "virtual": false,
      "description": "Removes classes used to indicate an elements editable state.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "startHighlight",
      "access": "",
      "virtual": false,
      "description": "Adds that class that indicates that an element is highlighted.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stopHighlight",
      "access": "",
      "virtual": false,
      "description": "Removes the class that indicates that an element is highlighted.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "prepareEdit",
      "access": "",
      "virtual": false,
      "description": "Removes the class that indicates that an element as editable.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stopEdit",
      "access": "",
      "virtual": false,
      "description": "Removes the class that indicates that an element is being edited.\n\nReapplies the class that indicates that a candidate editable element is\nagain available to be edited.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_pad",
      "access": "",
      "virtual": false,
      "description": "Adds padding around the editable element in order to make it pop visually.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_unpad",
      "access": "",
      "virtual": false,
      "description": "Removes the padding around the element being edited when editing ceases.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_getBgColor",
      "access": "",
      "virtual": false,
      "description": "Gets the background color of an element (or the inherited one).",
      "parameters": [
        {
          "name": "$e",
          "type": "DOM",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "_getPositionProperties",
      "access": "",
      "virtual": false,
      "description": "Gets the top and left properties of an element.\n\nConvert extraneous values and information into numbers ready for\nsubtraction.",
      "parameters": [
        {
          "name": "$e",
          "type": "DOM",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "_replaceBlankPosition",
      "access": "",
      "virtual": false,
      "description": "Replaces blank or 'auto' CSS \"position: <value>\" values with \"0px\".",
      "parameters": [
        {
          "name": "pos",
          "type": "String",
          "description": "(optional) The value for a CSS position declaration.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "Determines the actions to take given a change of state.",
      "parameters": [
        {
          "name": "Drupal.edit.FieldModel",
          "type": "",
          "description": "model",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "state",
          "type": "String",
          "description": "The state of the associated field. One of Drupal.edit.FieldModel.states.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "insertWYSIWYGToolGroups",
      "access": "",
      "virtual": false,
      "description": "Insert WYSIWYG markup into the associated toolbar.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getId",
      "access": "",
      "virtual": false,
      "description": "Retrieves the ID for this toolbar's container.\n\nOnly used to make sane hovering behavior possible.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "String\n  A string that can be used as the ID for this toolbar's container."
      }
    },
    {
      "name": "getFloatedWysiwygToolgroupId",
      "access": "",
      "virtual": false,
      "description": "Retrieves the ID for this toolbar's floating WYSIWYG toolgroup.\n\nUsed to provide an abstraction for any WYSIWYG editor to plug in.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "String\n  A string that can be used as the ID."
      }
    },
    {
      "name": "getMainWysiwygToolgroupId",
      "access": "",
      "virtual": false,
      "description": "Retrieves the ID for this toolbar's main WYSIWYG toolgroup.\n\nUsed to provide an abstraction for any WYSIWYG editor to plug in.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "String\n  A string that can be used as the ID."
      }
    },
    {
      "name": "_find",
      "access": "",
      "virtual": false,
      "description": "Finds a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery"
      }
    },
    {
      "name": "show",
      "access": "",
      "virtual": false,
      "description": "Shows a toolgroup.",
      "parameters": [
        {
          "name": "toolgroup",
          "type": "String",
          "description": "A toolgroup name.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditedElement",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "stateChange",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getEditUISettings",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "revert",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_getUntransformedText",
      "access": "",
      "virtual": false,
      "description": "Loads untransformed text for this field.\n\nMore accurately: it re-processes processed text to exclude transformation\nfilters used by the text format.",
      "parameters": [
        {
          "name": "callback",
          "type": "function",
          "description": "A callback function that will receive the untransformed text.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "validateExtension",
      "access": "",
      "virtual": false,
      "description": "Client-side file input validation of file extensions.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "triggerUploadButton",
      "access": "",
      "virtual": false,
      "description": "Trigger the upload_button mouse event to auto-upload as a managed file.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "disableFields",
      "access": "",
      "virtual": false,
      "description": "Prevent file uploads when using buttons not intended to upload.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "progressBar",
      "access": "",
      "virtual": false,
      "description": "Add progress bar support if possible.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "openInNewWindow",
      "access": "",
      "virtual": false,
      "description": "Open links to files within forms in a new window.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "validate",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onOrientationChange",
      "access": "",
      "virtual": false,
      "description": "Announces an orientation change.",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.Toolbar.ToolbarModel",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "orientation",
          "type": "String",
          "description": "The new value of the orientation attribute in the model.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onActiveTrayChange",
      "access": "",
      "virtual": false,
      "description": "Announces a changed active tray.",
      "parameters": [
        {
          "name": "model",
          "type": "Drupal.Toolbar.ToolbarModel",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "orientation",
          "type": "DOMElement",
          "description": "The new value of the tray attribute in the model.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onTabClick",
      "access": "",
      "virtual": false,
      "description": "Responds to a toolbar tab click.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "onOrientationToggleClick",
      "access": "",
      "virtual": false,
      "description": "Toggles the orientation of a toolbar tray.",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "updateTabs",
      "access": "",
      "virtual": false,
      "description": "Updates the display of the tabs: toggles a tab and the associated tray.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "updateBarAttributes",
      "access": "",
      "virtual": false,
      "description": "Update the attributes of the toolbar bar element.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "updateTrayOrientation",
      "access": "",
      "virtual": false,
      "description": "Updates the orientation of the active tray if necessary.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "adjustPlacement",
      "access": "",
      "virtual": false,
      "description": "Sets the tops of the trays so that they align with the bottom of the bar.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "loadSubtrees",
      "access": "",
      "virtual": false,
      "description": "Calls the endpoint URI that will return rendered subtrees with JSONP.\n\nThe rendered admin menu subtrees HTML is cached on the client in\nlocalStorage until the cache of the admin menu subtrees on the server-\nside is invalidated. The subtreesHash is stored in localStorage as well\nand compared to the subtreesHash in drupalSettings to determine when the\nadmin menu subtrees cache has been invalidated.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "{@inheritdoc}",
      "parameters": [],
      "examples": []
    },
    {
      "name": "initialize",
      "access": "",
      "virtual": false,
      "description": "Implements Backbone Views' initialize().",
      "parameters": [],
      "examples": []
    },
    {
      "name": "render",
      "access": "",
      "virtual": false,
      "description": "Implements Backbone Views' render().",
      "parameters": [],
      "examples": []
    },
    {
      "name": "toggleTour",
      "access": "",
      "virtual": false,
      "description": "Model change handler; starts or stops the tour.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "onClick",
      "access": "",
      "virtual": false,
      "description": "Toolbar tab click event handler; toggles isActive.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_getTour",
      "access": "",
      "virtual": false,
      "description": "Gets the tour.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery\n  A jQuery element pointing to a <ol> containing tour items."
      }
    },
    {
      "name": "_getDocument",
      "access": "",
      "virtual": false,
      "description": "Gets the relevant document as a jQuery element.",
      "parameters": [],
      "examples": [],
      "returns": {
        "type": "",
        "description": "jQuery\n  A jQuery element pointing to the document within which a tour would be\n  started given the current state."
      }
    },
    {
      "name": "_removeIrrelevantTourItems",
      "access": "",
      "virtual": false,
      "description": "Removes tour items for elements that don't have matching page elements or\nare explicitly filtered out via the 'tips' query string.\n\nExample:\n  http://example.com/foo?tips=bar\n\n  The above will filter out tips that do not have a matching page element or\n  don't have the \"bar\" class.",
      "parameters": [
        {
          "name": "$tour",
          "type": "jQueryElement",
          "description": "A jQuery element pointing to a <ol> containing tour items.",
          "default": "",
          "optional": "",
          "nullable": ""
        },
        {
          "name": "$document",
          "type": "jQueryElement",
          "description": "A jQuery element pointing to the document within which the elements\n  should be sought.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "bind",
      "access": "",
      "virtual": false,
      "description": "Bind the form-filling behavior.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getTransliterated",
      "access": "",
      "virtual": false,
      "description": "Get the source form field value as altered by the passed-in parameters.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_populate",
      "access": "",
      "virtual": false,
      "description": "Populate the target form field with the altered source field value.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "_unbind",
      "access": "",
      "virtual": false,
      "description": "Stop prepopulating the form fields.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "rebind",
      "access": "",
      "virtual": false,
      "description": "Bind event handlers to the new form fields, after they're replaced via AJAX.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "getOptions",
      "access": "",
      "virtual": false,
      "description": "Assemble a list of all the filterable options on the form.",
      "parameters": [
        {
          "name": "$allOptions",
          "type": "",
          "description": "A $ object representing the rows of filterable options to be\n  shown and hidden depending on the user's search terms.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "handleKeyup",
      "access": "",
      "virtual": false,
      "description": "Keyup handler for the search box that hides or shows the relevant options.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "insertAddRemoveFilterGroupLinks",
      "access": "",
      "virtual": false,
      "description": "Insert links that allow filter groups to be added and removed.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "clickAddGroupButton",
      "access": "",
      "virtual": false,
      "description": "Dynamically click the button that adds a new filter group.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "clickRemoveGroupButton",
      "access": "",
      "virtual": false,
      "description": "Dynamically click a button for removing a filter group.",
      "parameters": [
        {
          "name": "*",
          "type": "event",
          "description": "Event being triggered, with event.data.buttonId set to the ID of the\n  form button that should be clicked.",
          "default": "",
          "optional": "",
          "nullable": ""
        }
      ],
      "examples": []
    },
    {
      "name": "duplicateGroupsOperator",
      "access": "",
      "virtual": false,
      "description": "Move the groups operator so that it's between the first two groups, and\nduplicate it between any subsequent groups.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "syncGroupsOperators",
      "access": "",
      "virtual": false,
      "description": "Make the duplicated groups operators change in sync with each other.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "operatorChangeHandler",
      "access": "",
      "virtual": false,
      "description": "Click handler for the operators that appear between filter groups.\n\nForces all operator dropdowns to have the same value.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "redrawOperatorLabels",
      "access": "",
      "virtual": false,
      "description": "Redraw the operator labels that are displayed next to each filter.",
      "parameters": [],
      "examples": []
    },
    {
      "name": "updateRowspans",
      "access": "",
      "virtual": false,
      "description": "Update the rowspan attribute of each cell containing an operator dropdown.",
      "parameters": [],
      "examples": []
    }
  ],
  "namespaces": [
    {
      "name": "drupalSettings",
      "description": "Global variable generated by Drupal that holds all the configuration created\nfrom PHP.",
      "access": "",
      "virtual": false
    },
    {
      "name": "Drupal",
      "description": "Global Drupal object.",
      "access": "",
      "virtual": false,
      "classes": [
        {
          "name": "AjaxError",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "AjaxError",
            "description": "Extends Error to provide handling for Errors in AJAX",
            "parameters": [
              {
                "name": "xmlhttp",
                "type": "xhr",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "uri",
                "type": "String",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              }
            ],
            "examples": []
          }
        },
        {
          "name": "ajax",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "ajax",
            "description": "Ajax object.\n\nAll Ajax objects on a page are accessible through the global Drupal.ajax\nobject and are keyed by the submit button's ID. You can access them from\nyour module's JavaScript file to override properties or functions.\n\nFor example, if your Ajax enabled button has the ID 'edit-submit', you can\nredefine the function that is called to insert the new content like this\n(inside a Drupal.behaviors attach block):",
            "parameters": [
              {
                "name": "base",
                "type": "String",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "element",
                "type": "DOMElement",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "element_settings",
                "type": "Object",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              }
            ],
            "examples": [
              "Drupal.behaviors.myCustomAJAXStuff = {\n  attach: function (context, settings) {\n    Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {\n      new_content = $(response.data);\n      $('#my-wrapper').append(new_content);\n      alert('New content was appended to #my-wrapper');\n    }\n  }\n};"
            ]
          },
          "functions": [
            {
              "name": "keypressResponse",
              "access": "",
              "virtual": false,
              "description": "Handle a key press.\n\nThe Ajax object will, if instructed, bind to a key press response. This\nwill test to see if the key press is valid to trigger this event and\nif it is, trigger it for us and prevent other keypresses from triggering.\nIn this case we're handling RETURN and SPACEBAR keypresses (event codes 13\nand 32. RETURN is often used to submit a form when in a textfield, and\nSPACE is often used to activate an element without submitting.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "eventResponse",
              "access": "",
              "virtual": false,
              "description": "Handle an event that triggers an Ajax response.\n\nWhen an event that triggers an Ajax response happens, this method will\nperform the actual Ajax call. It is bound to the event using\nbind() in the constructor, and it uses the options specified on the\najax object.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "beforeSerialize",
              "access": "",
              "virtual": false,
              "description": "Handler for the form serialization.\n\nRuns before the beforeSend() handler (see below), and unlike that one, runs\nbefore field data is collected.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "beforeSubmit",
              "access": "",
              "virtual": false,
              "description": "Modify form values prior to form submission.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "beforeSend",
              "access": "",
              "virtual": false,
              "description": "Prepare the Ajax request before it is sent.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "success",
              "access": "",
              "virtual": false,
              "description": "Handler for the form redirection completion.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "getEffect",
              "access": "",
              "virtual": false,
              "description": "Build an effect object which tells us how to apply the effect when adding new HTML.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "error",
              "access": "",
              "virtual": false,
              "description": "Handler for the form redirection error.",
              "parameters": [],
              "examples": []
            }
          ]
        },
        {
          "name": "AjaxCommands",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "AjaxCommands",
            "description": "Provide a series of commands that the server can request the client perform.",
            "parameters": [],
            "examples": []
          },
          "functions": [
            {
              "name": "insert",
              "access": "",
              "virtual": false,
              "description": "Command to insert new content into the DOM.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "remove",
              "access": "",
              "virtual": false,
              "description": "Command to remove a chunk from the page.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "changed",
              "access": "",
              "virtual": false,
              "description": "Command to mark a chunk changed.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "alert",
              "access": "",
              "virtual": false,
              "description": "Command to provide an alert.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "redirect",
              "access": "",
              "virtual": false,
              "description": "Command to set the window.location, redirecting the browser.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "css",
              "access": "",
              "virtual": false,
              "description": "Command to provide the jQuery css() function.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "settings",
              "access": "",
              "virtual": false,
              "description": "Command to set the settings that will be used for other commands in this response.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "data",
              "access": "",
              "virtual": false,
              "description": "Command to attach data using jQuery's data API.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "invoke",
              "access": "",
              "virtual": false,
              "description": "Command to apply a jQuery method.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "restripe",
              "access": "",
              "virtual": false,
              "description": "Command to restripe a table.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "add_css",
              "access": "",
              "virtual": false,
              "description": "Command to add css.\n\nUses the proprietary addImport method if available as browsers which\nsupport that method ignore @import statements in dynamically added\nstylesheets.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "openDialog",
              "access": "",
              "virtual": false,
              "description": "Command to open a dialog.",
              "parameters": [
                {
                  "name": "ajax",
                  "type": "xhr",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "response",
                  "type": [
                    "Object",
                    "String"
                  ],
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "status",
                  "type": "String",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": []
            },
            {
              "name": "closeDialog",
              "access": "",
              "virtual": false,
              "description": "Command to close a dialog.\n\nIf no selector is given, it defaults to trying to close the modal.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "setDialogOption",
              "access": "",
              "virtual": false,
              "description": "Command to set a dialog property.\n\njQuery UI specific way of setting dialog options.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "editorDialogSave",
              "access": "",
              "virtual": false,
              "description": "Command to save the contents of an editor-provided modal.\n\nThis command does not close the open modal. It should be followed by a call\nto Drupal.AjaxCommands.prototype.closeDialog. Editors that are integrated\nwith dialogs must independently listen for an editor:dialogsave event to save\nthe changes into the contents of their interface.",
              "parameters": [],
              "examples": []
            }
          ]
        },
        {
          "name": "DropButton",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "DropButton",
            "description": "A DropButton presents an HTML list as a button with a primary action.\n\nAll secondary actions beyond the first in the list are presented in a\ndropdown list accessible through a toggle arrow associated with the button.",
            "parameters": [
              {
                "name": "dropbutton",
                "type": "DOMElement",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "settings",
                "type": "Object",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "settings.title",
                "type": "String",
                "description": "The text inside the toggle link element. This text is hidden from\n  visual UAs.",
                "default": "",
                "optional": "",
                "nullable": ""
              }
            ],
            "examples": []
          },
          "properties": [
            {
              "name": "dropbuttons",
              "access": "",
              "virtual": false,
              "description": "Store all processed DropButtons.",
              "type": {
                "names": [
                  "Array"
                ]
              }
            }
          ],
          "functions": [
            {
              "name": "toggle",
              "access": "",
              "virtual": false,
              "description": "Toggle the dropbutton open and closed.",
              "parameters": [
                {
                  "name": "show",
                  "type": "Boolean",
                  "description": "Forces dropbutton to open by passing true or to close by passing false.",
                  "default": "",
                  "optional": true,
                  "nullable": ""
                }
              ],
              "examples": []
            },
            {
              "name": "hoverIn",
              "access": "",
              "virtual": false,
              "description": "Hover",
              "parameters": [],
              "examples": []
            },
            {
              "name": "hoverOut",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [],
              "examples": []
            },
            {
              "name": "open",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [],
              "examples": []
            },
            {
              "name": "close",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [],
              "examples": []
            },
            {
              "name": "focusOut",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [
                {
                  "name": "e",
                  "type": "Event",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": []
            },
            {
              "name": "focusIn",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [
                {
                  "name": "e",
                  "type": "Event",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": []
            }
          ]
        },
        {
          "name": "ProgressBar",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "ProgressBar",
            "description": "A progressbar object. Initialized with the given id. Must be inserted into\nthe DOM afterwards through progressBar.element.\n\nmethod is the function which will perform the HTTP request to get the\nprogress bar state. Either \"GET\" or \"POST\".",
            "parameters": [
              {
                "name": "id",
                "type": "String",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "updateCallback",
                "type": "function",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "method",
                "type": "String",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              },
              {
                "name": "errorCallback",
                "type": "function",
                "description": "",
                "default": "",
                "optional": "",
                "nullable": ""
              }
            ],
            "examples": [
              "var progressWrapper = document.querySelector('#progress-wrapper');\nvar progressElement = new Drupal.ProgressBar('myProgressBar');\nprogressWrapper.appendChild(progressElement.element);"
            ]
          },
          "properties": [
            {
              "name": "id",
              "access": "",
              "virtual": false,
              "description": "",
              "type": {
                "names": [
                  "String"
                ]
              }
            },
            {
              "name": "method",
              "access": "",
              "virtual": false,
              "description": "",
              "type": {
                "names": [
                  "String"
                ]
              }
            }
          ],
          "functions": [
            {
              "name": "updateCallback",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [],
              "examples": []
            },
            {
              "name": "errorCallback",
              "access": "",
              "virtual": false,
              "description": "",
              "parameters": [
                {
                  "name": "percentage",
                  "type": "Number",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "message",
                  "type": "String",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "this",
                  "type": "Drupal.ProgressBar",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": []
            },
            {
              "name": "setProgress",
              "access": "",
              "virtual": false,
              "description": "Set the percentage and status message for the progressbar.",
              "parameters": [
                {
                  "name": "percentage",
                  "type": "Number",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "message",
                  "type": "String",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "label",
                  "type": "String",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": []
            },
            {
              "name": "startMonitoring",
              "access": "",
              "virtual": false,
              "description": "Start monitoring progress via Ajax.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "stopMonitoring",
              "access": "",
              "virtual": false,
              "description": "Stop monitoring progress via Ajax.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "sendPing",
              "access": "",
              "virtual": false,
              "description": "Request progress data from server.",
              "parameters": [],
              "examples": []
            },
            {
              "name": "displayError",
              "access": "",
              "virtual": false,
              "description": "Display errors on the page.",
              "parameters": [],
              "examples": []
            }
          ]
        },
        {
          "name": "TabbingManager",
          "description": "",
          "extends": [],
          "access": "",
          "virtual": false,
          "fires": "",
          "constructor": {
            "name": "TabbingManager",
            "description": "Provides an API for managing page tabbing order modifications.",
            "parameters": [],
            "examples": []
          }
        }
      ],
      "functions": [
        {
          "name": "announce",
          "access": "",
          "virtual": false,
          "description": "Triggers audio UAs to read the supplied text.\n\nThe aria-live region will only read the text that currently populates its\ntext node. Replacing text quickly in rapid calls to announce results in\nonly the text from the most recent call to Drupal.announce() being read.\nBy wrapping the call to announce in a debounce function, we allow for\ntime for multiple calls to Drupal.announce() to queue up their messages.\nThese messages are then joined and append to the aria-live region as one\ntext node.",
          "parameters": [
            {
              "name": "text",
              "type": "String",
              "description": "A string to be read by the UA.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "priority",
              "type": "String",
              "description": "A string to indicate the priority of the message. Can be either\n  'polite' or 'assertive'. Polite is the default.",
              "default": "",
              "optional": true,
              "nullable": ""
            }
          ],
          "examples": [
            "$('#search-list')\n  .on('itemInsert', function (event, data) {\n    // Insert the new items.\n    $(data.container.el).append(data.items.el);\n    // Announce the change to the page contents.\n    Drupal.announce(Drupal.t('@count items added to @container',\n      {'@count': data.items.length, '@container': data.container.title}\n    ));\n  });"
          ],
          "returns": {
            "type": "function",
            "description": ""
          }
        },
        {
          "name": "debounce",
          "access": "",
          "virtual": false,
          "description": "Adapted from underscore.js with the addition Drupal namespace.\n\nThe debounce function wrapper should be used sparingly. One clear use case\nis limiting the invocation of a callback attached to the window resize event.\n\nBefore using the debounce function wrapper, consider first whether the\ncallback could be attache to an event that fires less frequently or if the\nfunction can be written in such a way that it is only invoked under specific\nconditions.",
          "parameters": [
            {
              "name": "func",
              "type": "function",
              "description": "The function to be invoked.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "wait",
              "type": "Number",
              "description": "The time period within which the callback function should only be\n  invoked once. For example if the wait period is 250ms, then the callback\n  will only be called at most 4 times per second.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "immediate",
              "type": "Boolean",
              "description": "Run the callback at the beginning.",
              "default": "undefined",
              "optional": true,
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "attachBehaviors",
          "access": "",
          "virtual": false,
          "description": "Attach all registered behaviors to a page element.\n\nBehaviors are event-triggered actions that attach to page elements, enhancing\ndefault non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors\nobject using the method 'attach' and optionally also 'detach' as follows:\n\nDrupal.attachBehaviors is added below to the jQuery.ready event and therefore\nruns on initial page load. Developers implementing Ajax in their solutions\nshould also call this function after new page content has been loaded,\nfeeding in an element to be processed, in order to attach all behaviors to\nthe new content.\n\nBehaviors should use\n<code>var elements = $(context).find(selector).once('behavior-name');</code>\nto ensure the behavior is attached only once to a given element. (Doing so\nenables the reprocessing of given elements, which may be needed on occasion\ndespite the ability to limit behavior attachment to a particular element.)",
          "parameters": [
            {
              "name": "context",
              "type": "DOMElement",
              "description": "An element to attach behaviors to. If none is given, the document element\n  is used.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "settings",
              "type": "Object",
              "description": "An object containing settings for the current context. If none is given,\n  the global drupalSettings object is used.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": [
            "Drupal.behaviors.behaviorName = {\n  attach: function (context, settings) {\n    ...\n  },\n  detach: function (context, settings, trigger) {\n    ...\n  }\n};"
          ]
        },
        {
          "name": "detachBehaviors",
          "access": "",
          "virtual": false,
          "description": "Detach registered behaviors from a page element.\n\nDevelopers implementing AHAH/Ajax in their solutions should call this\nfunction before page content is about to be removed, feeding in an element\nto be processed, in order to allow special behaviors to detach from the\ncontent.\n\nSuch implementations should look for the class name that was added in their\ncorresponding Drupal.behaviors.behaviorName.attach implementation, i.e.\nbehaviorName-processed, to ensure the behavior is detached only from\npreviously processed elements.",
          "parameters": [
            {
              "name": "context",
              "type": "DOMElement",
              "description": "An element to detach behaviors from. If none is given, the document element\n  is used.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "settings",
              "type": "Object",
              "description": "An object containing settings for the current context. If none given, the\n  global drupalSettings object is used.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "trigger",
              "type": "String",
              "description": "A string containing what's causing the behaviors to be detached. The\n  possible triggers are:\n  - unload: (default) The context element is being removed from the DOM.\n  - move: The element is about to be moved within the DOM (for example,\n    during a tabledrag row swap). After the move is completed,\n    Drupal.attachBehaviors() is called, so that the behavior can undo\n    whatever it did in response to the move. Many behaviors won't need to\n    do anything simply in response to the element being moved, but because\n    IFRAME elements reload their \"src\" when being moved within the DOM,\n    behaviors bound to IFRAME elements (like WYSIWYG editors) may need to\n    take some action.\n  - serialize: When an Ajax form is submitted, this is called with the\n    form as the context. This provides every behavior within the form an\n    opportunity to ensure that the field elements have correct content\n    in them before the form is serialized. The canonical use-case is so\n    that WYSIWYG editors can update the hidden textarea to which they are\n    bound.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "checkWidthBreakpoint",
          "access": "",
          "virtual": false,
          "description": "Helper to test document width for mobile configurations.",
          "parameters": [],
          "examples": []
        },
        {
          "name": "checkPlain",
          "access": "",
          "virtual": false,
          "description": "Encode special characters in a plain-text string for display as HTML.",
          "parameters": [
            {
              "name": "str",
              "type": "String",
              "description": "The string to be encoded.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": "The encoded string."
          }
        },
        {
          "name": "formatString",
          "access": "",
          "virtual": false,
          "description": "Replace placeholders with sanitized values in a string.",
          "parameters": [
            {
              "name": "str",
              "type": "String",
              "description": "A string with placeholders.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "args",
              "type": "Object",
              "description": "An object of replacements pairs to make. Incidences of any key in this\n  array are replaced with the corresponding value. Based on the first\n  character of the key, the value is escaped and/or themed\n   - !variable: inserted as is\n   - @variable: escape plain text to HTML (Drupal.checkPlain)\n   - %variable: escape text and theme as a placeholder for user-submitted\n     content (checkPlain + Drupal.theme('placeholder'))",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": ""
          }
        },
        {
          "name": "t",
          "access": "",
          "virtual": false,
          "description": "Translate strings to the page language or a given language.\n\nSee the documentation of the server-side t() function for further details.",
          "parameters": [
            {
              "name": "str",
              "type": "String",
              "description": "A string containing the English string to translate.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "args",
              "type": "Object.<*>",
              "description": "An object of replacements pairs to make after translation. Incidences\n  of any key in this array are replaced with the corresponding value.\n  See {@link Drupal.formatString}.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "options",
              "type": "Object",
              "description": "",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "options.context",
              "type": "String",
              "description": "The context the source string belongs to.",
              "default": "''",
              "optional": true,
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": "The translated string."
          }
        },
        {
          "name": "url",
          "access": "",
          "virtual": false,
          "description": "Returns the URL to a Drupal page.",
          "parameters": [
            {
              "name": "path",
              "type": "String",
              "description": "Drupal path to transform to URL.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": ""
          }
        },
        {
          "name": "formatPlural",
          "access": "",
          "virtual": false,
          "description": "Format a string containing a count of items.\n\nThis function ensures that the string is pluralized correctly. Since Drupal.t() is\ncalled by this function, make sure not to pass already-localized strings to it.\n\nSee the documentation of the server-side format_plural() function for further details.",
          "parameters": [
            {
              "name": "count",
              "type": "Number",
              "description": "The item count to display.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "singular",
              "type": "String",
              "description": "The string for the singular case. Please make sure it is clear this is\n  singular, to ease translation (e.g. use \"1 new comment\" instead of \"1 new\").\n  Do not use @count in the singular string.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "plural",
              "type": "String",
              "description": "The string for the plural case. Please make sure it is clear this is plural,\n  to ease translation. Use @count in place of the item count, as in \"@count\n  new comments\".",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "args",
              "type": "Object",
              "description": "An object of replacements pairs to make after translation. Incidences\n  of any key in this array are replaced with the corresponding value.\n  See Drupal.formatString().\n  Note that you do not need to include @count in this array.\n  This replacement is done automatically for the plural case.",
              "default": "",
              "optional": true,
              "nullable": ""
            },
            {
              "name": "options",
              "type": "Object",
              "description": "The options to pass to the Drupal.t() function.",
              "default": "",
              "optional": true,
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": "A translated string."
          }
        },
        {
          "name": "encodePath",
          "access": "",
          "virtual": false,
          "description": "Encodes a Drupal path for use in a URL.\n\nFor aesthetic reasons slashes are not escaped.",
          "parameters": [
            {
              "name": "item",
              "type": "String",
              "description": "Unencoded path.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": [],
          "returns": {
            "type": "String",
            "description": ""
          }
        },
        {
          "name": "tableDrag",
          "access": "",
          "virtual": false,
          "description": "Constructor for the tableDrag object. Provides table and field manipulation.",
          "parameters": [
            {
              "name": "table",
              "type": "",
              "description": "DOM object for the table to be made draggable.",
              "default": "",
              "optional": "",
              "nullable": ""
            },
            {
              "name": "tableSettings",
              "type": "",
              "description": "Settings for the table added via drupal_add_dragtable().",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "verticalTab",
          "access": "",
          "virtual": false,
          "description": "The vertical tab object represents a single tab within a tab group.",
          "parameters": [
            {
              "name": "settings",
              "type": "Object",
              "description": "An object with the following keys:\n  - title: The name of the tab.\n  - details: The jQuery object of the details element that is the tab pane.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "EditorFeature",
          "access": "",
          "virtual": false,
          "description": "A text editor feature object. Initialized with the feature name.\n\nContains a set of HTML rules (Drupal.EditorFeatureHTMLRule objects) that\ndescribe which HTML tags, attributes, styles and classes are required (i.e.\nessential for the feature to function at all) and which are allowed (i.e. the\nfeature may generate this, but they're not essential).\n\nIt is necessary to allow for multiple HTML rules per feature: with just one\nHTML rule per feature, there is not enough expressiveness to describe certain\ncases. For example: a \"table\" feature would probably require the <table> tag,\nand might allow for e.g. the \"summary\" attribute on that tag. However, the\ntable feature would also require the <tr> and <td> tags, but it doesn't make\nsense to allow for a \"summary\" attribute on these tags. Hence these would\nneed to be split in two separate rules.\n\nHTML rules must be added with the addHTMLRule() method. A feature that has\nzero HTML rules does not create or modify HTML.",
          "parameters": [
            {
              "name": "name",
              "type": "String",
              "description": "The name of the feature.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "EditorFeatureHTMLRule",
          "access": "",
          "virtual": false,
          "description": "Constructor for an editor feature HTML rule. Intended to be used in\ncombination with Drupal.EditorFeature.\n\nA text editor feature rule object describes both\n - required HTML tags, attributes, styles and classes: without these, the\n   text editor feature is unable to function. It's possible that a\n - allowed HTML tags, attributes, styles and classes: these are optional in\n   the strictest sense, but it is possible that the feature generates them.\n\nThe structure can be very clearly seen below: there's a \"required\" and an\n\"allowed\" key. For each of those, there are objects with the \"tags\",\n\"attributes\", \"styles\" and \"classes\" keys. For all these keys the values are\ninitialized to the empty array. List each possible value as an array value.\nBesides the \"required\" and \"allowed\" keys, there's an optional \"raw\" key: it\nallows text editor implementations to optionally pass in their raw\nrepresentation instead of the Drupal-defined representation for HTML rules.\n\nExamples:\n - tags: ['<a>']\n - attributes: ['href', 'alt']\n - styles: ['color', 'text-decoration']\n - classes: ['external', 'internal']",
          "parameters": [],
          "examples": []
        },
        {
          "name": "FilterStatus",
          "access": "",
          "virtual": false,
          "description": "Constructor for a text filter status object. Initialized with the filter ID.\n\nIndicates whether the text filter is currently active (enabled) or not.\n\nContains a set of HTML rules (Drupal.FilterHTMLRule objects) that describe\nwhich HTML tags are allowed or forbidden. They can also describe for a set of\ntags (or all tags) which attributes, styles and classes are allowed and which\nare forbidden.\n\nIt is necessary to allow for multiple HTML rules per feature, for analogous\nreasons as Drupal.EditorFeature.\n\nHTML rules must be added with the addHTMLRule() method. A filter that has\nzero HTML rules does not disallow any HTML.",
          "parameters": [
            {
              "name": "name",
              "type": "String",
              "description": "The name of the feature.",
              "default": "",
              "optional": "",
              "nullable": ""
            }
          ],
          "examples": []
        },
        {
          "name": "FilterHTMLRule",
          "access": "",
          "virtual": false,
          "description": "A text filter HTML rule object. Intended to be used in combination with\nDrupal.FilterStatus.\n\nA text filter rule object describes\n 1. allowed or forbidden tags: (optional) whitelist or blacklist HTML tags\n 2. restricted tag properties: (optional) whitelist or blacklist attributes,\n    styles and classes on a set of HTML tags.\n\nTypically, each text filter rule object does either 1 or 2, not both.\n\nThe structure can be very clearly seen below:\n 1. use the \"tags\" key to list HTML tags, and set the \"allow\" key to either\n    true (to allow these HTML tags) or false (to forbid these HTML tags). If\n    you leave the \"tags\" key's default value (the empty array), no\n    restrictions are applied.\n 2. all nested within the \"restrictedTags\" key: use the \"tags\" subkey to list\n    HTML tags to which you want to apply property restrictions, then use the\n    \"allowed\" subkey to whitelist specific property values, and similarly use\n    the \"forbidden\" subkey to blacklist specific property values.\n\nExamples:\n - Whitelist the \"p\", \"strong\" and \"a\" HTML tags:\n   {\n     tags: ['p', 'strong', 'a'],\n     allow: true,\n     restrictedTags: {\n       tags: [],\n       allowed: { attributes: [], styles: [], classes: [] },\n       forbidden: { attributes: [], styles: [], classes: [] }\n     }\n   }\n - For the \"a\" HTML tag, only allow the \"href\" attribute and the \"external\"\n   class and disallow the \"target\" attribute.\n   {\n     tags: [],\n     allow: null,\n     restrictedTags: {\n       tags: ['a'],\n       allowed: { attributes: ['href'], styles: [], classes: ['external'] },\n       forbidden: { attributes: ['target'], styles: [], classes: [] }\n     }\n   }\n - For all tags, allow the \"data-*\" attribute (that is, any attribute that\n   begins with \"data-\").\n   {\n     tags: [],\n     allow: null,\n     restrictedTags: {\n       tags: ['*'],\n       allowed: { attributes: ['data-*'], styles: [], classes: [] },\n       forbidden: { attributes: [], styles: [], classes: [] }\n     }\n   }",
          "parameters": [],
          "examples": []
        },
        {
          "name": "menuUpdateParentList",
          "access": "",
          "virtual": false,
          "description": "Function to set the options of the menu parent item dropdown.",
          "parameters": [],
          "examples": []
        },
        {
          "name": "evaluatePasswordStrength",
          "access": "",
          "virtual": false,
          "description": "Evaluate the strength of a user's password.\n\nReturns the estimated strength and the relevant output message.",
          "parameters": [],
          "examples": []
        }
      ],
      "properties": [
        {
          "name": "displace",
          "access": "",
          "virtual": false,
          "description": "Assign the displace function to a property of the Drupal global object.",
          "type": ""
        },
        {
          "name": "tabbingManager",
          "access": "",
          "virtual": false,
          "description": "",
          "type": {
            "names": [
              "TabbingManager"
            ]
          }
        },
        {
          "name": "ckeditor",
          "access": "",
          "virtual": false,
          "description": "CKEditor configuration UI methods of Backbone objects.",
          "type": ""
        },
        {
          "name": "contextual",
          "access": "",
          "virtual": false,
          "description": "Model and View definitions.",
          "type": ""
        },
        {
          "name": "contextualToolbar",
          "access": "",
          "virtual": false,
          "description": "Model and View definitions.",
          "type": ""
        },
        {
          "name": "filterConfiguration",
          "access": "",
          "virtual": false,
          "description": "Tracks the configuration of all text filters in Drupal.FilterStatus objects\nfor Drupal.editorConfiguration.featureIsAllowedByFilters().",
          "type": ""
        },
        {
          "name": "editors",
          "access": "",
          "virtual": false,
          "description": "Initialize an empty object for editors to place their attachment code.",
          "type": ""
        },
        {
          "name": "fieldUIDisplayOverview",
          "access": "",
          "virtual": false,
          "description": "Row handlers for the 'Manage display' screen.",
          "type": ""
        },
        {
          "name": "file",
          "access": "",
          "virtual": false,
          "description": "File upload utility functions.",
          "type": ""
        },
        {
          "name": "toolbar",
          "access": "",
          "virtual": false,
          "description": "Toolbar methods of Backbone objects.",
          "type": ""
        }
      ],
      "namespaces": [
        {
          "name": "behaviors",
          "description": "Holds all initialization methods.",
          "access": "",
          "virtual": false,
          "properties": [
            {
              "name": "AJAX",
              "access": "",
              "virtual": false,
              "description": "Attaches the Ajax behavior to each Ajax form element.",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "drupalAnnounce",
              "access": "",
              "virtual": false,
              "description": "Builds a div element with the aria-live attribute and attaches it\nto the DOM.",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "autocomplete",
              "access": "",
              "virtual": false,
              "description": "Attaches the autocomplete behavior to all required fields.",
              "type": ""
            },
            {
              "name": "batch",
              "access": "",
              "virtual": false,
              "description": "Attaches the batch behavior to progress bars.",
              "type": ""
            },
            {
              "name": "dialog",
              "access": "",
              "virtual": false,
              "description": "",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "drupalDisplace",
              "access": "",
              "virtual": false,
              "description": "Registers a resize handler on the window.",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "dropButton",
              "access": "",
              "virtual": false,
              "description": "Process elements with the .dropbutton class on page load.",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "formUpdated",
              "access": "",
              "virtual": false,
              "description": "Sends a 'formUpdated' event each time a form element is modified.",
              "type": ""
            },
            {
              "name": "fillUserInfoFromCookie",
              "access": "",
              "virtual": false,
              "description": "Prepopulate form fields with information from the visitor cookie.",
              "type": ""
            },
            {
              "name": "machineName",
              "access": "",
              "virtual": false,
              "description": "Attach the machine-readable name form element behavior.",
              "type": {
                "names": [
                  "Behavior"
                ]
              }
            },
            {
              "name": "tableDrag",
              "access": "",
              "virtual": false,
              "description": "Drag and drop table rows with field manipulation.\n\nUsing the drupal_add_tabledrag() function, any table with weights or parent\nrelationships may be made into draggable tables. Columns containing a field\nmay optionally be hidden, providing a better user experience.\n\nCreated tableDrag instances may be modified with custom behaviors by\noverriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.\nSee blocks.js for an example of adding additional functionality to tableDrag.",
              "type": ""
            },
            {
              "name": "tableHeader",
              "access": "",
              "virtual": false,
              "description": "Attaches sticky table headers.",
              "type": ""
            },
            {
              "name": "tableResponsive",
              "access": "",
              "virtual": false,
              "description": "Attach the tableResponsive function to Drupal.behaviors.",
              "type": ""
            },
            {
              "name": "setTimezone",
              "access": "",
              "virtual": false,
              "description": "Set the client's system time zone as default values of form fields.",
              "type": ""
            },
            {
              "name": "verticalTabs",
              "access": "",
              "virtual": false,
              "description": "This script transforms a set of details into a stack of vertical\ntabs. Another tab pane can be selected by clicking on the respective\ntab.\n\nEach tab may have a summary which can be updated by another\nscript. For that to work, each details element has an associated\n'verticalTabCallback' (with jQuery.data() attached to the details),\nwhich is called every time the user performs an update to a form\nelement inside the tab pane.",
              "type": ""
            },
            {
              "name": "blockSettingsSummary",
              "access": "",
              "virtual": false,
              "description": "Provide the summary information for the block settings vertical tabs.",
              "type": ""
            },
            {
              "name": "blockDrag",
              "access": "",
              "virtual": false,
              "description": "Move a block in the blocks table from one region to another via select list.\n\nThis behavior is dependent on the tableDrag behavior, since it uses the\nobjects initialized in that behavior to update the row.",
              "type": ""
            },
            {
              "name": "blockFilterByText",
              "access": "",
              "virtual": false,
              "description": "Filters the block list by a text input search string.\n\nText search input: input.block-filter-text\nTarget element:    input.block-filter-text[data-element]\nSource text:       .block-filter-text-source",
              "type": ""
            },
            {
              "name": "blockHighlightPlacement",
              "access": "",
              "virtual": false,
              "description": "Highlights the block that was just placed into the block listing.",
              "type": ""
            },
            {
              "name": "ckeditorAdminButtonPluginSettings",
              "access": "",
              "virtual": false,
              "description": "Automatically shows/hides settings of buttons-only CKEditor plugins.",
              "type": ""
            },
            {
              "name": "ckeditorDrupalImageSettingsSummary",
              "access": "",
              "virtual": false,
              "description": "Provides the summary for the \"drupalimage\" plugin settings vertical tab.",
              "type": ""
            },
            {
              "name": "ckeditorStylesComboSettings",
              "access": "",
              "virtual": false,
              "description": "Ensures that the \"stylescombo\" button's metadata remains up-to-date.\n\nTriggers the CKEditorPluginSettingsChanged event whenever the \"stylescombo\"\nplugin settings change, to ensure that the corresponding feature metadata is\nimmediately updated — i.e. ensure that HTML tags and classes entered here are\nknown to be \"required\", which may affect filter settings.",
              "type": ""
            },
            {
              "name": "ckeditorStylesComboSettingsSummary",
              "access": "",
              "virtual": false,
              "description": "Provides the summary for the \"stylescombo\" plugin settings vertical tab.",
              "type": ""
            },
            {
              "name": "commentByViewer",
              "access": "",
              "virtual": false,
              "description": "Add 'by-viewer' class to comments written by the current user.",
              "type": ""
            },
            {
              "name": "commentNewIndicator",
              "access": "",
              "virtual": false,
              "description": "Render \"new\" comment indicators wherever necessary.",
              "type": ""
            },
            {
              "name": "nodeNewCommentsLink",
              "access": "",
              "virtual": false,
              "description": "Render \"X new comments\" links wherever necessary.",
              "type": ""
            },
            {
              "name": "contentTranslationDependentOptions",
              "access": "",
              "virtual": false,
              "description": "Forces applicable options to be checked as translatable.",
              "type": ""
            },
            {
              "name": "contentTranslation",
              "access": "",
              "virtual": false,
              "description": "Makes field translatability inherit bundle translatability.",
              "type": ""
            },
            {
              "name": "contextual",
              "access": "",
              "virtual": false,
              "description": "Attaches outline behavior for regions associated with contextual links.\n\nEvents\n  Contextual triggers an event that can be used by other scripts.\n  - drupalContextualLinkAdded: Triggered when a contextual link is added.",
              "type": ""
            },
            {
              "name": "contextualToolbar",
              "access": "",
              "virtual": false,
              "description": "Attaches contextual's edit toolbar tab behavior.",
              "type": ""
            },
            {
              "name": "initializeFilterConfiguration",
              "access": "",
              "virtual": false,
              "description": "Initializes Drupal.filterConfiguration.",
              "type": ""
            },
            {
              "name": "editor",
              "access": "",
              "virtual": false,
              "description": "Enables editors on text_format elements.",
              "type": ""
            },
            {
              "name": "fileValidateAutoAttach",
              "access": "",
              "virtual": false,
              "description": "Attach behaviors to managed file element upload fields.",
              "type": ""
            },
            {
              "name": "fileAutoUpload",
              "access": "",
              "virtual": false,
              "description": "Attach behaviors to managed file element upload fields.",
              "type": ""
            },
            {
              "name": "fileButtons",
              "access": "",
              "virtual": false,
              "description": "Attach behaviors to the file upload and remove buttons.",
              "type": ""
            },
            {
              "name": "filePreviewLinks",
              "access": "",
              "virtual": false,
              "description": "Attach behaviors to links within managed file elements.",
              "type": ""
            },
            {
              "name": "filterGuidelines",
              "access": "",
              "virtual": false,
              "description": "Displays the guidelines of the selected text format automatically.",
              "type": ""
            },
            {
              "name": "negotiationLanguage",
              "access": "",
              "virtual": false,
              "description": "Makes language negotiation inherit user interface negotiation.",
              "type": ""
            },
            {
              "name": "localeTranslateDirty",
              "access": "",
              "virtual": false,
              "description": "Marks changes of translations",
              "type": ""
            },
            {
              "name": "hideUpdateInformation",
              "access": "",
              "virtual": false,
              "description": "Show/hide the description details on Available translation updates page.",
              "type": ""
            },
            {
              "name": "importLanguageCodeSelector",
              "access": "",
              "virtual": false,
              "description": "Select the language code of an imported file based on its filename.\n\nThis only works if the file name ends with \"LANGCODE.po\".",
              "type": ""
            },
            {
              "name": "localeDatepicker",
              "access": "",
              "virtual": false,
              "description": "Attaches language support to the jQuery UI datepicker component.",
              "type": ""
            },
            {
              "name": "menuLinkAutomaticTitle",
              "access": "",
              "virtual": false,
              "description": "Automatically fill in a menu link title, if possible.",
              "type": ""
            },
            {
              "name": "nodePreviewDestroyLinks",
              "access": "",
              "virtual": false,
              "description": "Disabling all links (except local fragment identifiers such as href=\"#frag\")\nin node previews to prevent users from leaving the page.",
              "type": ""
            },
            {
              "name": "newSet",
              "access": "",
              "virtual": false,
              "description": "Make it so when you enter text into the \"New set\" textfield, the\ncorresponding radio button gets selected.",
              "type": ""
            },
            {
              "name": "simpleTestMenuCollapse",
              "access": "",
              "virtual": false,
              "description": "Add the cool table collapsing on the testing overview page.",
              "type": ""
            },
            {
              "name": "simpleTestSelectAll",
              "access": "",
              "virtual": false,
              "description": "Select/deselect all the inner checkboxes when the outer checkboxes are\nselected/deselected.",
              "type": ""
            },
            {
              "name": "simpletestTableFilterByText",
              "access": "",
              "virtual": false,
              "description": "Filters the test list table by a text input search string.\n\nAdditionally accounts for multiple tables being wrapped in \"package\" details\nelements.\n\nText search input: input.table-filter-text\nTarget table:      input.table-filter-text[data-table]\nSource text:       .table-filter-text-source",
              "type": ""
            },
            {
              "name": "copyFieldValue",
              "access": "",
              "virtual": false,
              "description": "When a field is filled out, apply its value to other fields that will likely\nuse the same value. In the installer this is used to populate the\nadministrator e-mail address with the same value as the site e-mail address.",
              "type": ""
            },
            {
              "name": "tableFilterByText",
              "access": "",
              "virtual": false,
              "description": "Filters the module list table by a text input search string.\n\nAdditionally accounts for multiple tables being wrapped in \"package\" details\nelements.\n\nText search input: input.table-filter-text\nTarget table:      input.table-filter-text[data-table]\nSource text:       .table-filter-text-source",
              "type": ""
            },
            {
              "name": "termDrag",
              "access": "",
              "virtual": false,
              "description": "Move a block in the blocks table from one region to another via select list.\n\nThis behavior is dependent on the tableDrag behavior, since it uses the\nobjects initialized in that behavior to update the row.",
              "type": ""
            },
            {
              "name": "textSummary",
              "access": "",
              "virtual": false,
              "description": "Auto-hide summary textarea if empty and show hide and unhide links.",
              "type": ""
            },
            {
              "name": "escapeAdmin",
              "access": "",
              "virtual": false,
              "description": "Replaces the \"Home\" link with \"Back to site\" link.\n\nBack to site link points to the last non-administrative page the user visited\nwithin the same browser tab.",
              "type": ""
            },
            {
              "name": "toolbar",
              "access": "",
              "virtual": false,
              "description": "Registers tabs with the toolbar.\n\nThe Drupal toolbar allows modules to register top-level tabs. These may point\ndirectly to a resource or toggle the visibility of a tray.\n\nModules register tabs with hook_toolbar().",
              "type": ""
            },
            {
              "name": "tour",
              "access": "",
              "virtual": false,
              "description": "Attaches the tour's toolbar tab behavior.\n\nIt uses the query string for:\n- tour: When ?tour=1 is present, the tour will start automatically\n        after the page has loaded.\n- tips: Pass ?tips=class in the url to filter the available tips to\n        the subset which match the given class.\n\nExample:\n  http://example.com/foo?tour=1&tips=bar",
              "type": ""
            },
            {
              "name": "password",
              "access": "",
              "virtual": false,
              "description": "Attach handlers to evaluate the strength of any password fields and to check\nthat its confirmation is correct.",
              "type": ""
            },
            {
              "name": "fieldUserRegistration",
              "access": "",
              "virtual": false,
              "description": "Field instance settings screen: force the 'Display on registration form'\ncheckbox checked whenever 'Required' is checked.",
              "type": ""
            },
            {
              "name": "permissions",
              "access": "",
              "virtual": false,
              "description": "Shows checked and disabled checkboxes for inherited permissions.",
              "type": ""
            },
            {
              "name": "ViewsAjaxView",
              "access": "",
              "virtual": false,
              "description": "Attaches the AJAX behavior to Views exposed filter forms and key View links.",
              "type": ""
            },
            {
              "name": "livePreview",
              "access": "",
              "virtual": false,
              "description": "Trigger preview when the \"live preview\" checkbox is checked.",
              "type": ""
            },
            {
              "name": "syncPreviewDisplay",
              "access": "",
              "virtual": false,
              "description": "Sync preview display.",
              "type": ""
            },
            {
              "name": "viewsUiEditView",
              "access": "",
              "virtual": false,
              "description": "Improve the user experience of the views edit interface.",
              "type": ""
            },
            {
              "name": "viewsUiAddView",
              "access": "",
              "virtual": false,
              "description": "In the add view wizard, use the view name to prepopulate form fields such as\npage title and menu link.",
              "type": ""
            },
            {
              "name": "viewsUiRenderAddViewButton",
              "access": "",
              "virtual": false,
              "description": "The input field items that add displays must be rendered as <input> elements.\nThe following behavior detaches the <input> elements from the DOM, wraps them\nin an unordered list, then appends them to the list of tabs.",
              "type": ""
            },
            {
              "name": "viewsFilterConfigSelectAll",
              "access": "",
              "virtual": false,
              "description": "Add a select all checkbox, which checks each checkbox at once.",
              "type": ""
            },
            {
              "name": "viewsRemoveIconClass",
              "access": "",
              "virtual": false,
              "description": "Remove icon class from elements that are themed as buttons or dropbuttons.",
              "type": ""
            },
            {
              "name": "viewsUiCheckboxify",
              "access": "",
              "virtual": false,
              "description": "Change \"Expose filter\" buttons into checkboxes.",
              "type": ""
            },
            {
              "name": "viewsUiChangeDefaultWidget",
              "access": "",
              "virtual": false,
              "description": "Change the default widget to select the default group according to the\nselected widget for the exposed group.",
              "type": ""
            },
            {
              "name": "viewsUiOverrideSelect",
              "access": "",
              "virtual": false,
              "description": "Change the Apply button text based upon the override select state.",
              "type": ""
            },
            {
              "name": "viewTableFilterByText",
              "access": "",
              "virtual": false,
              "description": "Filters the view listing tables by a text input search string.\n\nText search input: input.views-filter-text\nTarget table:      input.views-filter-text[data-table]\nSource text:       .views-table-filter-text-source",
              "type": ""
            }
          ]
        },
        {
          "name": "theme",
          "description": "Generate the themed representation of a Drupal object.\n\nAll requests for themed output must go through this function. It examines\nthe request and routes it to the appropriate theme function. If the current\ntheme does not provide an override function, the generic theme function is\ncalled.\n\nFor example, to retrieve the HTML for text that should be emphasized and\ndisplayed as a placeholder inside a sentence, call\nDrupal.theme('placeholder', text).",
          "access": "",
          "virtual": false,
          "functions": [
            {
              "name": "dropbuttonToggle",
              "access": "",
              "virtual": false,
              "description": "A toggle is an interactive element often bound to a click handler.",
              "parameters": [
                {
                  "name": "options",
                  "type": "Object",
                  "description": "",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                },
                {
                  "name": "options.title",
                  "type": "String",
                  "description": "The HTML anchor title attribute and text for the inner span element.",
                  "default": "",
                  "optional": true,
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "String",
                "description": "A string representing a DOM fragment."
              }
            },
            {
              "name": "placeholder",
              "access": "",
              "virtual": false,
              "description": "Formats text for emphasized display in a placeholder inside a sentence.",
              "parameters": [
                {
                  "name": "str",
                  "type": "String",
                  "description": "The text to format (plain-text).",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "String",
                "description": "The formatted text (html)."
              }
            },
            {
              "name": "verticalTab",
              "access": "",
              "virtual": false,
              "description": "Theme function for a vertical tab.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - title: The name of the tab.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "Object",
                "description": "This function has to return an object with at least these keys:\n  - item: The root tab jQuery element\n  - link: The anchor tag that acts as the clickable area of the tab\n      (jQuery version)\n  - summary: The jQuery element that contains the tab summary"
              }
            },
            {
              "name": "ckeditorRow",
              "access": "",
              "virtual": false,
              "description": "Themes a blank CKEditor row.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String"
              }
            },
            {
              "name": "ckeditorToolbarGroup",
              "access": "",
              "virtual": false,
              "description": "Themes a blank CKEditor button group.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String"
              }
            },
            {
              "name": "ckeditorButtonGroupNameForm",
              "access": "",
              "virtual": false,
              "description": "Themes a form for changing the title of a CKEditor button group.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String"
              }
            },
            {
              "name": "ckeditorButtonGroupNamesToggle",
              "access": "",
              "virtual": false,
              "description": "Themes a button that will toggle the button group names in active config.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String"
              }
            },
            {
              "name": "ckeditorNewButtonGroup",
              "access": "",
              "virtual": false,
              "description": "Themes a button that will prompt the user to name a new button group.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String"
              }
            },
            {
              "name": "contextualTrigger",
              "access": "",
              "virtual": false,
              "description": "A trigger is an interactive element often bound to a click handler.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  A string representing a DOM fragment."
              }
            },
            {
              "name": "editBackstage",
              "access": "",
              "virtual": false,
              "description": "Theme function for a \"backstage\" for the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - String id: the id to apply to the backstage.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editEntityToolbar",
              "access": "",
              "virtual": false,
              "description": "Theme function for a toolbar container of the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - String id: the id to apply to the toolbar container.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editEntityToolbarLabel",
              "access": "",
              "virtual": false,
              "description": "Theme function for a toolbar container of the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - String entityLabel: The title of the active entity.\n  - String fieldLabel: The label of the highlighted or active field.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editEntityToolbarFence",
              "access": "",
              "virtual": false,
              "description": "Element that defines a containing box of the placement of the entity toolbar.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editFieldToolbar",
              "access": "",
              "virtual": false,
              "description": "Theme function for a toolbar container of the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "",
                  "description": "An object with the following keys:\n  - id: the id to apply to the toolbar container.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "The corresponding HTML."
              }
            },
            {
              "name": "editToolgroup",
              "access": "",
              "virtual": false,
              "description": "Theme function for a toolbar toolgroup of the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - String id: (optional) the id of the toolgroup\n  - String classes: the class of the toolgroup.\n  - Array buttons: @see Drupal.theme.prototype.editButtons().",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editButtons",
              "access": "",
              "virtual": false,
              "description": "Theme function for buttons of the Edit module.\n\nCan be used for the buttons both in the toolbar toolgroups and in the modal.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - buttons: an array of objects with the following keys:\n    - String type: the type of the button (defaults to 'button')\n    - Array classes: the classes of the button.\n    - String label: the label of the button.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "editFormContainer",
              "access": "",
              "virtual": false,
              "description": "Theme function for a form container of the Edit module.",
              "parameters": [
                {
                  "name": "settings",
                  "type": "Object",
                  "description": "An object with the following keys:\n  - String id: the id to apply to the toolbar container.\n  - String loadingMsg: The message to show while loading.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "String\n  The corresponding HTML."
              }
            },
            {
              "name": "filterFilterHTMLUpdateMessage",
              "access": "",
              "virtual": false,
              "description": "Theme function for the filter_html update message.",
              "parameters": [
                {
                  "name": "tags",
                  "type": "Array",
                  "description": "An array of the new tags that are to be allowed.",
                  "default": "",
                  "optional": "",
                  "nullable": ""
                }
              ],
              "examples": [],
              "returns": {
                "type": "",
                "description": "The corresponding HTML."
              }
            },
            {
              "name": "toolbarOrientationToggle",
              "access": "",
              "virtual": false,
              "description": "A toggle is an interactive element often bound to a click handler.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "String",
                "description": "A string representing a DOM fragment."
              }
            },
            {
              "name": "toolbarMenuItemToggle",
              "access": "",
              "virtual": false,
              "description": "A toggle is an interactive element often bound to a click handler.",
              "parameters": [],
              "examples": [],
              "returns": {
                "type": "String",
                "description": "A string representing a DOM fragment."
              }
            },
            {
              "name": "tableDragChangedWarning",
              "access": "",
              "virtual": false,
              "description": "Get rid of irritating tabledrag messages",
              "parameters": [],
              "examples": []
            }
          ]
        },
        {
          "name": "edit",
          "description": "",
          "access": "",
          "virtual": false,
          "properties": [
            {
              "name": "app",
              "access": "",
              "virtual": false,
              "description": "",
              "type": {
                "names": [
                  "Drupal.edit.AppView"
                ]
              }
            },
            {
              "name": "collections",
              "access": "",
              "virtual": false,
              "description": "",
              "type": {
                "names": [
                  "Object"
                ]
              }
            },
            {
              "name": "editors",
              "access": "",
              "virtual": false,
              "description": "In-place editors will register themselves in this object.",
              "type": {
                "names": [
                  "Object.<Editor>"
                ]
              }
            },
            {
              "name": "metadata",
              "access": "",
              "virtual": false,
              "description": "Per-field metadata that indicates whether in-place editing is allowed,\nwhich in-place editor should be used, etc.",
              "type": {
                "names": [
                  "Object"
                ]
              }
            },
            {
              "name": "FieldModel",
              "access": "",
              "virtual": false,
              "description": "State of an in-place editable field in the DOM.",
              "type": ""
            },
            {
              "name": "AppView",
              "access": "",
              "virtual": false,
              "description": "App view.",
              "type": {
                "names": [
                  "Backbone.View"
                ]
              }
            },
            {
              "name": "EditorView",
              "access": "",
              "virtual": false,
              "description": "A base implementation that outlines the structure for in-place editors.\n\nSpecific in-place editor implementations should subclass (extend) this View\nand override whichever method they deem necessary to override.\n\nLook at Drupal.edit.editors.form and Drupal.edit.editors.plain_text for\nexamples.",
              "type": ""
            }
          ],
          "classes": [
            {
              "name": "app",
              "description": "",
              "extends": [],
              "access": "",
              "virtual": false,
              "fires": "",
              "constructor": {
                "name": "app",
                "description": "Instantiate AppModel (application state) and AppView, which is the\ncontroller of the whole in-place editing experience.",
                "parameters": [],
                "examples": []
              }
            },
            {
              "name": "ContextualLinkView",
              "description": "",
              "extends": [],
              "access": "",
              "virtual": false,
              "fires": "",
              "constructor": {
                "name": "ContextualLinkView",
                "description": "",
                "parameters": [],
                "examples": []
              }
            }
          ]
        }
      ]
    }
  ]
};
