# aframe-ui-modal-component

Create a modal dialog or floating menu in A-Frame.

### Properties

| Property         | Description                                                                               | Default Value |
| ---------------- | -----------                                                                               | ------------- |
| trigger          | Event to make dialog or menu visible.                                                     | `click`       |
| triggerElement   | Element to which the trigger event listener will be applied.                              | `a-scene`     |
| zpos             | Position the dialog or menu on the z-axis. In meters.                                     | -4            |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/IdeaSpaceVR/aframe-ui-modal-component/master/dist/aframe-ui-modal-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity position="0 1.8 5">
            <a-entity camera look-controls></a-entity>
        </a-entity>
        
        <a-entity ui-modal visible="false">
          <a-plane width="3" height="1" color="red" position="0 -1.2 0"></a-plane>
          <a-plane width="3" height="1" color="green" position="0 0 0"></a-plane>
          <a-plane width="3" height="1" color="blue" position="0 1.2 0"></a-plane>
        </a-entity>

        <a-sky src="images/sky.jpg"></a-sky>
  </a-scene>
</body>
```

### Examples

- http://ideaspacevr.github.io/aframe-ui-modal-component
- https://www.ideaspacevr.org/themes/web-vr-photo-sphere-viewer-navigation-menu
