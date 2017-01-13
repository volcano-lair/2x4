2x4
===

_(Two by Four)_ is a logging interface inspired by [Bunyan](https://github.com/trentm/node-bunyan) to make logging from library modules simple and idiomatic.

## The Problem

Logging from a reusable library is hard. Maintainers must define and document their own bespoke interfaces to export operational events, then consumers have to integrate them into their own libraries or services' logging interfaces.

The `debug` library and `util.debuglog` interface provide a powerful utility for development debugging, but aren't well suited for operational logging as they require configuration via environment variables and lack configurable  output levels, formatting and output media.

Bunyan and Winston are popular logging modules with powerful features for filtering and routing of messages to various transports. Bunyan introduces hierarchal child-producers for simple, idiomatic request and session oriented logging, ideal for HTTP servers.

Neither of these modules provide a good way to implement idiomatic logging within a library module when the author doesn't know how consumers will want/need to consume logging events.

## Exporters

2x4 solves this problem by implementing a common interface for libraries to define and export a logger, for consumers of libraries to find and attach to their exported loggers.

The `Logger` interface provides a stream API that can be used to transform events as required, 

 It expands upon Bunyan's JSON-structured log format and child-appenders, providing a framework for libraries to export their logger, and for consumers to enumerate all of the exported loggers in a process and select which instances to consume and how to filter and transform their events.
