###!
# vue-conditional-attrs
# (c) FL3N
###

class Utils
	@isArray: (value) ->
		value and
        	typeof value is 'object' and
        	value instanceof Array and
        	typeof value.length is 'number' and
        	typeof value.splice is 'function' and
        	not ( value.propertyIsEnumerable 'length' )

	@isObject: (value) ->
		typeof value is 'object'

	@isFunction: (value) ->
		typeof value is 'function'

VueConditionalAttrs = {}
VueConditionalAttrs.install = (Vue) ->
	Vue.component 'cn-attrs',
		render: (createElement) ->
			#attributes
			attrs = {}
			for own key, data of @attrs
				value = data
				state = true

				if Utils.isObject data
					value = data.value
					state = data.if
				else
					if !value
						state = false

				if state
					attrs[key] = value

			#listeners
			listeners = {}
			#default listeners
			for own key, data of @$listeners
				listeners[key] = data
			#
			for own key, data of @on
				event = data
				state = true

				if Utils.isObject data
					event = data.event
					state = data.if
				else
					if !Utils.isFunction data
						state = false

				if state
					listeners[key] = event
			
			#directives
			directives = []
			for own key, data of @directives
				value = ''
				state = true

				if Utils.isObject data
					value = data.value
					state = data.if
				else
					if !data
						state = false

				if state
					directives.push
						name: key
						value: value

			##
			createElement @tag,
				attrs: attrs
				on: listeners
				directives: directives,
				@$slots.default

		props:
			tag:
				type: String
				default: 'div'
			attrs:
				type: Object
			directives:
				type: Object
			on:
				type: Object
			


if typeof define is 'function' and define.amd
	define([], -> VueConditionalAttrs)
else if typeof exports is 'object'
	module.exports = VueConditionalAttrs
else
	window.VueConditionalAttrs = VueConditionalAttrs
	Vue.use(VueConditionalAttrs)