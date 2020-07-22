import os
import logging
import pysolr


logger = logging.getLogger("__name__")

solr = None


def __init_solr():
    pysolr.ZooKeeper.CLUSTER_STATE = '/collections/datalayer/state.json'
    zookeeper = pysolr.ZooKeeper(os.getenv('DLA_SOLR_ZK_HOST'))
    global solr
    solr = pysolr.SolrCloud(zookeeper, "datalayer", always_commit=True)


def get_solr():
    global solr
    if solr == None:
        __init_solr()
    return solr


def index_tweet(tweet):
    logger.info('Indexing Tweet: {}'.format(tweet))
    get_solr().add([tweet], commit=True)


def search_tweets(q):
    logging.info('Search Tweets Query: {}'.format(q))
    tweets = get_solr().search(q, sort='date desc', rows=50)
    logger.info("Found {} Tweet(s): {}".format(len(tweets), tweets))
    return tweets
