[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Datalayer JupyterLab Twitter

:rocket: JupyterLab Extension for Datalayer.

![JupyterLab Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/src/jupyter/lab/twitter/docs/jupyterlab-datalayer.gif "JupyterLab Datalayer")

> Replace `$DLAHOME` in the following commands with whatever your local env looks like.

To start or develop, you first have to build `JupyterLab`.

```bash
# build jupyterlab.
cd $DLAHOME/repos/jupyterlab && \
  git checkout master && \
  pip install -e . && \
#  cd $DLAHOME/repos/jupyterlab//cells && \
#  yarn install && \
#  yarn build && \
  jupyter lab build
```

You also have to build `@datalayer-jupyterlab/jupyterlab-twitter` extension and enable the extension.

```bash
# build and enable `jupyterlab-datalayer` extension.
cd $DLAHOME/src/jupyter/lab/twitter && \
#  make clean && \
  make install && \
  make build && \
  make ext-enable && \
  jupyter lab build
```

Start JupyterLab with a environment variable that defines the Twitter callback URL.

```bash
DLA_TWITTER_OAUTH_CALLBACK_URL=http://localhost:8888/twitter/auth/popup && \
  jupyter lab
```

## Develop

```bash
# Prerequisite: install development version of the ui server.
cd $DLAHOME/src/jupyter/lab/twitter && \
  pip install -e .
```

```bash
# Shell #1 - watch the extension.
cd $DLAHOME/src/jupyter/lab/twitter && \
  make watch
# Shell #2 - run and watch jupyter lab.
#    --dev-mode \
#    --browser chromium-browser \
cd $DLAHOME/src/jupyter/lab/twitter && \
  DLA_TWITTER_OAUTH_CALLBACK_URL=http://localhost:8888/twitter/auth/popup && \
  jupyter lab \
    --watch \
    --config ./jupyter_notebook_config.py
```
