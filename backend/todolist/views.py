import urllib.request

from django.conf import settings
from django.http import HttpResponse, StreamingHttpResponse
from django.template import engines
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required

# chunk out response payload for streaming
def iter_response(response, chunk_size=65536):
    try:
        while True:
            data = response.read(chunk_size)
            if not data:
                break
            yield data
    finally:
        response.close()

@login_required(login_url="/admin/login")
def catchcall_dev(request, upstream='http://localhost:3000'):
    upstream_url = upstream + request.path
    response = urllib.request.urlopen(upstream_url)
    content_type = response.getheader('Content-Type')

    if content_type == 'text/html; charset=UTF-8':
        response_text = response.read().decode()
        response.close()
        return HttpResponse(
            engines['django'].from_string(response_text).render(),
            content_type=content_type,
            status=response.status,
            reason=response.reason
        )
    else:
        # stream the proxied frontend
        return StreamingHttpResponse(
            iter_response(response),
            content_type=content_type,
            status=response.status,
            reason=response.reason
        )

@login_required
def catchcall_prod(login_url="/admin/login"):
    TemplateView.as_view(template_name='index.html')

catchcall = catchcall_dev if settings.DEBUG else catchcall_prod