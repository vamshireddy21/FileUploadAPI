package app.fileuploadrestapi.filecontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FileIndexController {
	
	@GetMapping("/")
	public String uploadedFilesList(Model model) {
		return "fileupload";
	}

}
