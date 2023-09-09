import numpy as np
import tensorflow as tf
from transformers import BertTokenizer, TFBertForSequenceClassification
from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions

# 1. Load models
# Load the ResNet50 model for image classification
resnet_model = ResNet50(weights='imagenet')

# Load a pretrained BERT model for text classification
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
text_model = TFBertForSequenceClassification.from_pretrained("bert-base-uncased")

# NOTE: The BERT model here is used generically; ideally, it should be fine-tuned on a relevant dataset

# 2. Define functions for prediction
def predict_image_class(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    
    preds = resnet_model.predict(x)
    # decode top 5 predicted classes, you can customize this
    return decode_predictions(preds, top=5)[0]

def predict_text_class(caption):
    inputs = tokenizer(caption, return_tensors="tf")
    outputs = text_model(inputs)
    # get the predicted class; in a real-world scenario, you'll have more sophisticated classes
    predicted_class = np.argmax(outputs.logits.numpy(), axis=1)
    return predicted_class

# 3. Sample
img_path = "path_to_your_image.jpg"
caption = "your_media_caption"

image_predictions = predict_image_class(img_path)
text_predictions = predict_text_class(caption)

print("Image Predictions:", image_predictions)
print("Caption Class:", text_predictions)
