$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(document).ready(function(){$(".chosen-select").chosen({width:"100%"})}),$(document).ready(function(){function e(e){toastr.options={closeButton:!1,debug:!1,progressBar:!0,preventDuplicates:!1,positionClass:"toast-bottom-right",onclick:null,showDuration:"400",hideDuration:"1000",timeOut:"7000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},toastr.success(e.status,e.title)}$(".buttonChangeActive").on("click",function(){var t=$(this),a=t.val(),n=(t.data("id"),t.data("url"));$.ajax({type:"put",url:n,headers:{"X-CSRF-TOKEN":token},data:{is_active:a},success:function(n){1==a?t.val(0):t.val(1),e(n)}})}),$("#buttonAddTag").on("click",function(){function t(){o.val(""),s.val(""),r.val(""),i.val(""),u.html(""),m.html(""),h.html(""),p.html("")}function a(e){for(var t=n(),a="",o=0;o<e.newTags.length;o++)isSelected=-1!=t.indexOf(e.newTags[o].name)?"selected ":null,a+='<option name="tags[]" '+isSelected,a+=' value="'+e.newTags[o].id+'">',a+=e.newTags[o].name+"</option>";l.html(a),l.trigger("chosen:updated")}function n(){var e=[];return $(".chosen-choices").find(".search-choice").each(function(){var t=$(this).find("span").text();e.push(t)}),e}var o=$("#name"),s=$("#metadata_title"),r=$("#metadata_keywords"),i=$("#metadata_description"),d=$("#modalAddTag"),l=$("#select-list"),c=$('input[name="_token"]'),u=$("#error-name"),m=$("#error-metadata-title"),h=$("#error-metadata-keywords"),p=$("#error-metadata-description");$.ajax({type:"post",url:url,headers:{"X-CSRF-TOKEN":c.val()},data:{name:o.val(),metadata_title:s.val(),metadata_keywords:r.val(),metadata_description:i.val()},success:function(n){d.modal("hide"),t(),e(n),a(n)},error:function(e){u.html(e.responseJSON.name),m.html(e.responseJSON.metadata_title),h.html(e.responseJSON.metadata_keywords),p.html(e.responseJSON.metadata_description)}})})}),$(document).ready(function(){var e={};e.ui={container:"#pwd-container",showVerdictsInsideProgressBar:!0,viewports:{progress:".pwstrength_viewport_progress"}},e.common={zxcvbn:!0,userInputs:["#name","#email","#first_name","#last_name"]},$(".passwordMeter").pwstrength(e)}),$(document).ready(function(){$("#summernote").summernote({height:300,toolbar:[["style",["style"]],["style",["bold","italic","underline","clear"]],["font",["strikethrough","superscript","subscript"]],["para",["ul","ol","paragraph"]],["insert",["video","picture","link","hr"]],["view",["fullscreen","codeview"]],["help",["help"]]],disableDragAndDrop:!0})});