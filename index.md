---
title: Homepage
layout: home
---
<div class='row'>
    <div class='col-md-8'>
        <!--Blog Posts-->
        {% for post in site.posts %}
        <div class='panel panel-primary'>
            <div class='panel-heading'>
                <h3 class='panel-title'>{{ post.title }}</h3>
            </div>
            <div class='panel-body'>
                {{ post.content }}
            </div>
            <div class='panel-footer'>
                Created by {{ post.author }} on {{ post.date }}
            </div>
        </div>
        {% endfor %}
        <!--Blog Posts-->
    </div>
    <div class='col-md-4'>
        <div class='panel panel-info'>
            <div class='panel-heading'>
                <h3 class='panel-title'>Date and time</h3>
            </div>
            <div class='panel-body'>
                <span class='clock'></span>
            </div>
        </div>
        <div class='panel panel-warning'>
            <div class='panel-heading'>
                <h3 class='panel-title'>Developing Status</h3>
            </div>
            <div class='panel-body'>
                <div class="list-group">
                    {% for project in site.data.devstatus %}
                    <a href="/project/{{ project.id }}" class="list-group-item">
                        <h4 class="list-group-item-heading">{{ project.name }}</h4>
                        <p class="list-group-item-text">{{ project.percentage }}% - {{ project.releasedate }}</p>
                        <div class="progress">
                            <div class="progress-bar" style="width: {{ project.percentage }}%;"></div>
                        </div>
                    </a>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</div>