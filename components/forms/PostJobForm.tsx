"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { jobSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "../ui/badge";
import { CalendarIcon, X } from "lucide-react";
import { SortBy } from "../Shared/Filter/SortBy";
import { Experience } from "../Shared/Filter/Experience";
import { Filter } from "../Shared/Filter/Filter";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { createJob } from "@/lib/actions/jobs.actions";

const PostJobForm = () => {
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      place: "",
      salary: "",
    },
  });
  //  Handle Tag Input
  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }
        if (
          !field.value.includes(tagValue as never) &&
          field.value.length !== 6
        ) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
    console.log(e);
  };
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof jobSchema>) {
    setIsSubmitting(true);
    try {
      await createJob({});
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Job Title <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="focus:!ring-0"
                  placeholder="Job Title"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                kindly be as specific as possible when writing the job title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Job Description <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue={`
                
                  <div>
                  <h2>Role</h2>
                  <p>We are seeking a skilled and innovative Product Engineer to join our dynamic product development team. As a key contributor, you will be responsible for designing, developing, and optimizing our products from conception to implementation. The ideal candidate will bring a passion for innovation, a deep understanding of product development processes, and a commitment to delivering high-quality solutions.</p>
                  <h3>Responsibilities</h3>
                  <ul>
                  <li>Collaborate with cross-functional teams to define product requirements and specifications. </li>
                  <li> Design and develop product prototypes and models using CAD software.</li>
                  <li>Conduct feasibility studies and performance testing to ensure product functionality and reliability. </li>
                  <li>Drive the product development process, from concept to production, ensuring timely and cost-effective delivery. </li>
                  <li>Collaborate with manufacturing teams to optimize production processes and troubleshoot any issues that arise. </li>
                  <li>Conduct thorough research to stay updated on industry trends and emerging technologies. </li>

<li>

Work closely with the marketing team to provide technical expertise for product promotion and documentation </li>
</ul>
          <h2>Requirements</h2>    
          <ul>
          <li> Bachelor's degree in Mechanical Engineering, Product Design, or a related field. </li>
          <li> Proven experience as a Product Engineer or similar role.</li>
         <li>Proficient in CAD software, such as SolidWorks, AutoCAD, or similar tools. </li>
<li>Strong understanding of materials, manufacturing processes, and product lifecycle management. </li>
<li> Excellent problem-solving skills and attention to detail.</li>
<li>Effective communication and collaboration skills. </li>
<li> Ability to work in a fast-paced, dynamic environment.</li>

</ul>  
<h2>Who you are</h2> 
<ul>
<li>A passionate and creative engineer with a track record of successfully bringing products from concept to market.</li>
<li>Detail-oriented with a focus on delivering high-quality and innovative solutions. </li>
<li>Proactive and self-motivated with the ability to work both independently and as part of a team. </li>
<li>Strong analytical and critical-thinking skills. </li>

</ul>
</div>

                  `}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </FormControl>
              <FormDescription>
                kindly be as specific as possible when writing the job title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Job Tags<span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <>
                  <Input
                    className="focus:!ring-0"
                    placeholder="Job Tags"
                    onKeyDown={(e) => handleOnKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="mt-2 flex justify-evenly w-full items-center">
                      {field.value.map((tag: any) => (
                        <Badge key={tag}>
                          {tag} <X className="ml-2 cursor-pointer" size={12} />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription>
                press enter after each tag (6 tags maximum)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <div className="flex flex-col">
              <FormItem>
                <FormLabel>
                  Job Location (workstation)
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Filter />
                </FormControl>
                <FormDescription>
                  Workstation Location for reporting duty
                </FormDescription>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Job Contract<span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <SortBy />
              </FormControl>
              <FormDescription>Job Contract</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Experience Needed<span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Experience />
              </FormControl>
              <FormDescription>
                Years of experience required for the opening
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Salary <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="focus:!ring-0"
                  placeholder="Job Title"
                  {...field}
                />
              </FormControl>
              <FormDescription>Salary for the Job Opening</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Deadline for Applications</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Deadline for Application Submissions
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PostJobForm;
