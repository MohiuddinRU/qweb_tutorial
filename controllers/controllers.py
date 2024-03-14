# -*- coding: utf-8 -*-
# from odoo import http


# class QwebTutorial(http.Controller):
#     @http.route('/qweb_tutorial/qweb_tutorial', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/qweb_tutorial/qweb_tutorial/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('qweb_tutorial.listing', {
#             'root': '/qweb_tutorial/qweb_tutorial',
#             'objects': http.request.env['qweb_tutorial.qweb_tutorial'].search([]),
#         })

#     @http.route('/qweb_tutorial/qweb_tutorial/objects/<model("qweb_tutorial.qweb_tutorial"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('qweb_tutorial.object', {
#             'object': obj
#         })

