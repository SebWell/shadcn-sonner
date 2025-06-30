export default {
  editor: {
    label: {
      en: 'Sonner Toast',
      fr: 'Notifications Sonner'
    },
    icon: 'fontawesome/solid/bell',
    bubble: {
      icon: 'fontawesome/solid/bell'
    },
    customStylePropertiesOrder: [
      'maxWidth',
      'gap',
      'borderRadius',
      'shadow',
      'position'
    ],
    customSettingsPropertiesOrder: [
      'position',
      'maxToasts',
      'theme',
      'pauseOnHover',
      'dismissOnClick',
      'showCloseButton',
      'showProgress',
      'enableSwipe',
      'toasts'
    ]
  },
  triggerEvents: [
    {
      name: 'toast-shown',
      label: { en: 'Toast shown', fr: 'Toast affiché' },
      event: { toast: {} }
    },
    {
      name: 'toast-dismissed', 
      label: { en: 'Toast dismissed', fr: 'Toast fermé' },
      event: { toast: {} }
    },
    {
      name: 'action-clicked',
      label: { en: 'Action clicked', fr: 'Action cliquée' },
      event: { toast: {}, actionType: 'string', action: {} }
    }
  ],
  properties: {
    position: {
      label: { en: 'Position', fr: 'Position' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'top-left', label: { en: 'Top Left', fr: 'Haut Gauche' } },
          { value: 'top-center', label: { en: 'Top Center', fr: 'Haut Centre' } },
          { value: 'top-right', label: { en: 'Top Right', fr: 'Haut Droite' } },
          { value: 'bottom-left', label: { en: 'Bottom Left', fr: 'Bas Gauche' } },
          { value: 'bottom-center', label: { en: 'Bottom Center', fr: 'Bas Centre' } },
          { value: 'bottom-right', label: { en: 'Bottom Right', fr: 'Bas Droite' } }
        ]
      },
      defaultValue: 'bottom-right',
      bindable: true
    },
    maxToasts: {
      label: { en: 'Max visible toasts', fr: 'Nombre max de toasts visibles' },
      type: 'Number',
      section: 'settings',
      options: {
        min: 1,
        max: 10,
        step: 1
      },
      defaultValue: 5,
      bindable: true
    },
    theme: {
      label: { en: 'Theme', fr: 'Thème' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'light', label: { en: 'Light', fr: 'Clair' } },
          { value: 'dark', label: { en: 'Dark', fr: 'Sombre' } },
          { value: 'system', label: { en: 'System', fr: 'Système' } }
        ]
      },
      defaultValue: 'system',
      bindable: true
    },
    pauseOnHover: {
      label: { en: 'Pause on hover', fr: 'Pause au survol' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: true,
      bindable: true
    },
    dismissOnClick: {
      label: { en: 'Dismiss on click', fr: 'Fermer au clic' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: true,
      bindable: true
    },
    showCloseButton: {
      label: { en: 'Show close button', fr: 'Afficher le bouton fermer' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
      bindable: true
    },
    showProgress: {
      label: { en: 'Show progress bar', fr: 'Afficher la barre de progression' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: true,
      bindable: true
    },
    enableSwipe: {
      label: { en: 'Enable swipe to dismiss', fr: 'Activer le glissement pour fermer' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: true,
      bindable: true
    },
    width: {
      label: { en: 'Toast width', fr: 'Largeur des toasts' },
      type: 'Length',
      section: 'style',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 200, max: 600 },
          { value: 'rem', label: 'rem', min: 12, max: 40 },
          { value: '%', label: '%', min: 20, max: 100 }
        ]
      },
      defaultValue: '356px',
      bindable: true
    },
    gap: {
      label: { en: 'Gap between toasts', fr: 'Espacement entre toasts' },
      type: 'Length',
      section: 'style',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 32 },
          { value: 'rem', label: 'rem', min: 0, max: 2 }
        ]
      },
      defaultValue: '8px',
      bindable: true
    },
    toasts: {
      label: { en: 'Manual toasts', fr: 'Toasts manuels' },
      type: 'Array',
      section: 'settings',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              id: {
                label: { en: 'ID', fr: 'ID' },
                type: 'Text',
                bindable: true
              },
              type: {
                label: { en: 'Type', fr: 'Type' },
                type: 'TextSelect',
                options: {
                  options: [
                    { value: 'default', label: { en: 'Default', fr: 'Défaut' } },
                    { value: 'success', label: { en: 'Success', fr: 'Succès' } },
                    { value: 'error', label: { en: 'Error', fr: 'Erreur' } },
                    { value: 'warning', label: { en: 'Warning', fr: 'Avertissement' } },
                    { value: 'info', label: { en: 'Info', fr: 'Information' } },
                    { value: 'loading', label: { en: 'Loading', fr: 'Chargement' } }
                  ]
                },
                defaultValue: 'default',
                bindable: true
              },
              title: {
                label: { en: 'Title', fr: 'Titre' },
                type: 'Text',
                bindable: true
              },
              description: {
                label: { en: 'Description', fr: 'Description' },
                type: 'LongText',
                bindable: true
              },
              duration: {
                label: { en: 'Duration (ms)', fr: 'Durée (ms)' },
                type: 'Number',
                options: {
                  min: 0,
                  max: 10000,
                  step: 100
                },
                defaultValue: 4000,
                bindable: true
              },
              action: {
                label: { en: 'Action button', fr: 'Bouton d\'action' },
                type: 'Object',
                options: {
                  item: {
                    label: {
                      label: { en: 'Label', fr: 'Libellé' },
                      type: 'Text',
                      bindable: true
                    },
                    closeOnClick: {
                      label: { en: 'Close on click', fr: 'Fermer au clic' },
                      type: 'OnOff',
                      defaultValue: true,
                      bindable: true
                    }
                  }
                },
                bindable: true
              },
              cancel: {
                label: { en: 'Cancel button', fr: 'Bouton annuler' },
                type: 'Object',
                options: {
                  item: {
                    label: {
                      label: { en: 'Label', fr: 'Libellé' },
                      type: 'Text',
                      bindable: true
                    },
                    closeOnClick: {
                      label: { en: 'Close on click', fr: 'Fermer au clic' },
                      type: 'OnOff',
                      defaultValue: true,
                      bindable: true
                    }
                  }
                },
                bindable: true
              },
              className: {
                label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
                type: 'Text',
                bindable: true
              }
            }
          }
        }
      },
      defaultValue: [],
      bindable: true
    },
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style',
      bindable: true
    }
  }
}; 