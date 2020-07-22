.. _overview:

Overview
========

JupyterLab UI is built on the `Lumino <https://github.com/jupyterlab/lumino>`__ widgets. 

React components are available today in the `UI Components <https://github.com/jupyterlab/jupyterlab/tree/master/packages/ui-components>`__ package and embedded in Lumino widgets via the `WidgetReact <https://jupyterlab.readthedocs.io/en/latest/developer/virtualdom.html>`__ helper class.

However, the goal seems to remove React from the JupyterLab core source code. This is still under discussion, see e.g.:

- `Remove dependency on third-party library for ui-components <https://github.com/jupyterlab/jupyterlab/issues/6890>`__
- `Future of ui-components package: drop Blueprint; should we use Material-UI? <https://github.com/jupyterlab/jupyterlab/issues/7574>`__
- `Switch to material-ui <https://github.com/jupyterlab/jupyterlab/pull/6828>`__

Other systems part of the Jupyter ecosystem should be considered while integrating React in JupyterLab:

- `IpyWidgets <https://github.com/jupyter-widgets/ipywidgets>`__ (Jupyter Widgets, Interactive Widgets for the Jupyter Notebook) integrates with JupyterLab via the `IpyWidgets Jupyterlab Manager <https://github.com/jupyter-widgets/ipywidgets/tree/master/packages/jupyterlab-manager>`__ extension
- `Nteract <https://github.com/nteract/nteract>`__ which is developed from scratch with React. Ntreact supports IpyWidgets via its `jupyter-widgets <https://github.com/nteract/nteract/tree/master/packages/jupyter-widgets>`__ package

Technical Implementations
-------------------------

@lumino/virtualdom
~~~~~~~~~~~~~~~~~~~

Lumino `Virtual DOM <https://github.com/jupyterlab/lumino/tree/master/packages/virtualdom>`__ package.

`Adds a "pass thru" virtual element <https://github.com/jupyterlab/lumino/pull/29>`__

@nteract/transform-vdom
~~~~~~~~~~~~~~~~~~~~~~~

Nteract `Transform VDOM <https://github.com/nteract/nteract/tree/master/packages/transform-vdom>`__ package.

WidgetReact and UseSignal
~~~~~~~~~~~~~~~~~~~~~~~~~

WidgetReact allows to embed a React component into a Lumino Widget. The following details an example for the toolbar button:

- `ToolbarButtonComponent <https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L469>`__ is a React component for a button. It knows nothing about Lumino widgets nor signals.
- `ToolbarButton <https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L531>`__ is a Lumino widget that wraps the previous ToolbarButtonComponent with ReactWidget and takes the exact same props.
- `UseSignal <https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L569>`__ component manages the transition between Lumino signals and React props.

Another example is the `HDF Toolbar <https://github.com/telamonian/jupyterlab-hdf/blob/master/src/toolbar.tsx>`__.

@nteract/jupyter-widgets
~~~~~~~~~~~~~~~~~~~~~~~~

Ntreact supports IpyWidgets via its `Jupyter Widgets <https://github.com/nteract/nteract/tree/master/packages/jupyter-widgets>`__ package.

ReactWidget and UseProps
~~~~~~~~~~~~~~~~~~~~~~~~

TBD

IpyWidgets
~~~~~~~~~~

`IpyWidgets <https://github.com/jupyter-widgets/ipywidgets>`__ are Jupyter Widgets, Interactive Widgets for the Jupyter Notebook.

You need a python library for this.

.. code:: bash

    pip install ipywidgets


They integrate with JupyterLab via the 
`IpyWidgets Jupyterlab Manager <https://github.com/jupyter-widgets/ipywidgets/tree/master/packages/jupyterlab-manager>`__ 
extension (@jupyter-widgets/jupyterlab-manager).

.. code:: bash

    jupyter labextension install @jupyter-widgets/jupyterlab-manager


To display a React component in the IpyWidget output, see for example `IpyResuse Widget <https://github.com/jtpio/ipyresuse/blob/ad36caf300fb18daab92279597b86cea95a5372d/src/widget.tsx#L106-L107>`__: 
`ReactDOM.render(...)` your component on `this.el`, the DOM node you have control over. It's the root node of the widget.

`IpyMaterialUI <https://github.com/maartenbreddels/ipymaterialui>`__ is Jupyter Widgets based on React Material UI components.
You can access your children's props, which are immutable, but the underlying IpyWidget model can change.

@jupyterlab/vdom
~~~~~~~~~~~~~~~~

JupyterLab `VDOM <https://github.com/jupyterlab/jupyterlab/tree/master/packages/vdom>`__ 
and `VDOM Extension <https://github.com/jupyterlab/jupyterlab/tree/master/packages/vdom-extension>`__
packages which use the previously described `@nteract/transform-vdom` package.

`Add event handling support to vdom-extension <https://github.com/jupyterlab/jupyterlab/pull/5670>`__.

Needs:

- `Nteract Python VDOM <https://github.com/nteract/vdom>`__ is Virtual DOM for Python.

Read Also
---------

- `How do you engineer a JupyterLab React Component? <https://github.com/jupyterlab/jupyterlab/issues/6380>`__
- `Track migration to components <https://github.com/jupyterlab/jupyterlab/issues/5702>`__
- `[WIP] Add @jupyterlab/components package <https://github.com/jupyterlab/jupyterlab/pull/5538>`__
- `Figure out if tree shaking is working with blueprint <https://github.com/jupyterlab/jupyterlab/issues/5601>`__
- `Create a @jupyterlab/ui package based on Blueprint and possibly Material UI <https://github.com/jupyterlab/jupyterlab/issues/5170>`__
- `Add ui package and refactor toolbars <https://github.com/jupyterlab/jupyterlab/pull/4234>`__
- `How do you engineer a JupyterLab React Component? <https://github.com/jupyterlab/jupyterlab/issues/6380>`__
- `Switch to material-ui <https://github.com/jupyterlab/jupyterlab/pull/6828>`__
- `Remove dependency on third-party library for components <https://github.com/jupyterlab/jupyterlab/issues/6890>`__

- [OUTDATED] `jupyter-react <https://github.com/timbr-io/jupyter-react>`__
- [OUTDATED] `VDom IpyWidget <https://github.com/jupyter-widgets/ipywidgets/issues/2039>`__
- [OUTDATED] `VDom Ipywidget Repo <https://github.com/shoobomb/vdom_ipywidget>`__
- [OUTDATED] `VDom Demo <https://github.com/AaronWatters/jp_doodle/blob/master/notebooks/misc/wdom%20demo.ipynb>`__
