---
title: eLibrary
layout: home-project
project: eAnniversary
projectdsc: Android App for Countdown to your Anniversary
---
<div class='row'>
    <div class='col-md-8'>
        <div class="page-header">
            <h1>About this Project</h1>
        </div>
        <p>Comming Soon</p>
    </div>
    <div class='col-md-4'>
        <div class='panel panel-warning'>
            <div class='panel-heading'>
                <h3 class='panel-title'>Downloads</h3>
            </div>
            <div class='panel-body'>
            	<div class='list-group'>
            		{% for download in site.data.downloads-eanniversary %}
            		<a href='{{ download.url }}' class='list-group-item'>
                		<h4 class="list-group-item-heading">Version {{ download.version }}</h4>
                        <p class="list-group-item-text">{{ download.system }} - {{ download.class }} - {{ download.file }}</p>
                    </a>
                    {% endfor %}
            	</div>
            </div>
        </div>
        <div class='panel panel-info'>
            <div class='panel-heading'>
                <h3 class='panel-title'>Navigation</h3>
            </div>
            <div class='panel-body'>
                <div class='list-group'>
                	<a href='#' class='list-group-item'>Downloads</a>
                	<a href='#' class='list-group-item'>Documentation</a>
                	<a href='#' class='list-group-item'>Github Repo</a>
                	<a href='#' class='list-group-item'>Gitlab Mirror</a>
                </div>
            </div>
        </div>
    </div>
</div>