class RedmineMermaidHookListener < Redmine::Hook::ViewListener
  render_on(:view_layouts_base_html_head,
            partial: "redmine_mermaid/view_layouts_base_html_head")
end
